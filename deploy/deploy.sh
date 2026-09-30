#!/usr/bin/env bash
# Blue/green deploy for travel-agency.
# Usage:    ./deploy.sh <image-tag>
# Requires: DOMAIN and IMAGE_REPO environment variables.
set -euo pipefail
cd "$(dirname "$0")"

TAG="${1:?Usage: deploy.sh <image-tag>}"
: "${DOMAIN:?DOMAIN is required}"
: "${IMAGE_REPO:?IMAGE_REPO is required}"
[[ "$TAG" =~ ^[A-Za-z0-9._-]{1,128}$ ]] || { echo "Invalid tag: $TAG" >&2; exit 1; }

STATE_DIR=.state
mkdir -p "$STATE_DIR" nginx/conf.d
ACTIVE=$(cat "$STATE_DIR/active" 2>/dev/null || echo none)
if [[ "$ACTIVE" == blue ]]; then NEW=green; else NEW=blue; fi
echo "==> Active: $ACTIVE | deploying $TAG to $NEW"

# --- 1. Save the image tags that docker compose reads from .env ---
touch .env
set_env() { grep -v "^$1=" .env > .env.tmp || true; echo "$1=$2" >> .env.tmp; mv .env.tmp .env; }
set_env IMAGE_REPO "$IMAGE_REPO"
set_env "${NEW^^}_TAG" "$TAG"

# --- 2. Start the new colour and wait until it is healthy ---
docker compose pull "app_$NEW"
docker compose up -d --no-deps "app_$NEW"
CID=$(docker compose ps -q "app_$NEW")
for i in $(seq 1 30); do
  STATUS=$(docker inspect -f '{{.State.Health.Status}}' "$CID")
  [[ "$STATUS" == healthy ]] && break
  if [[ "$STATUS" == unhealthy || $i -eq 30 ]]; then
    echo "!! app_$NEW is $STATUS. Aborting; $ACTIVE keeps serving traffic." >&2
    docker compose logs --tail 50 "app_$NEW" >&2
    docker compose stop "app_$NEW"
    exit 1
  fi
  sleep 2
done
echo "==> app_$NEW is healthy"

# --- 3. Point nginx at the new colour ---
echo "upstream app { server app_$NEW:3000; }" > nginx/conf.d/upstream.conf
render_site() { sed "s/__DOMAIN__/$DOMAIN/g" "nginx/templates/$1" > nginx/conf.d/site.conf; }
apply_nginx() {
  if [[ -n "$(docker compose ps -q --status running nginx)" ]]; then
    docker compose exec -T nginx nginx -t
    docker compose exec -T nginx nginx -s reload
  else
    docker compose up -d --no-deps nginx
  fi
}

HAS_CERT=$(docker compose run --rm -T --entrypoint sh certbot \
  -c "test -f /etc/letsencrypt/live/$DOMAIN/fullchain.pem && echo yes || echo no")
if [[ "$HAS_CERT" != yes ]]; then
  echo "==> No certificate yet: serving HTTP and requesting one"
  render_site site-http.conf
  apply_nginx
  sleep 2
  docker compose run --rm -T --entrypoint certbot certbot certonly \
    --webroot -w /var/www/certbot -d "$DOMAIN" \
    --agree-tos --register-unsafely-without-email --non-interactive
fi
render_site site-https.conf
apply_nginx
docker compose up -d --no-deps certbot
echo "==> nginx now routes to app_$NEW"

# --- 4. Stop the old colour and remember the new state ---
if [[ "$ACTIVE" != none ]]; then docker compose stop "app_$ACTIVE"; fi
echo "$NEW" > "$STATE_DIR/active"
echo "$(date -u +%FT%TZ) $TAG $NEW" >> "$STATE_DIR/history"
docker image prune -f > /dev/null
echo "==> Deployed $TAG on $NEW"