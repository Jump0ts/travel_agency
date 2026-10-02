# syntax=docker/dockerfile:1

# ---- 1. Dependencies ----
    FROM node:22-alpine AS deps
    WORKDIR /app
    COPY package.json package-lock.json ./
    RUN HUSKY=0 npm ci
    
    # ---- 2. Build ----
    FROM node:22-alpine AS build
    WORKDIR /app
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    ARG NEXT_PUBLIC_BASE_URL
    ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL \
        NEXT_TELEMETRY_DISABLED=1
    RUN npm run build
    # Alpine uses musl: the glibc build of sharp/libvips can never load here.
    RUN rm -rf .next/standalone/node_modules/@img/sharp-libvips-linux-x64 \
                .next/standalone/node_modules/@img/sharp-linux-x64
    
    # ---- 3. Runtime ----
    FROM alpine:3.24 AS runtime
    # Only the Node.js binary and the C++ runtime it links against: no npm, no yarn.
    RUN apk add --no-cache libstdc++ libgcc \
        && addgroup -g 1000 node \
        && adduser -u 1000 -G node -s /bin/sh -D node
    COPY --from=node:22-alpine /usr/local/bin/node /usr/local/bin/node
    WORKDIR /app
    ARG APP_VERSION=dev
    ENV NODE_ENV=production \
        NEXT_TELEMETRY_DISABLED=1 \
        PORT=3000 \
        HOSTNAME=0.0.0.0 \
        APP_VERSION=$APP_VERSION
    COPY --from=build --chown=node:node /app/.next/standalone ./
    COPY --from=build --chown=node:node /app/.next/static ./.next/static
    COPY --from=build --chown=node:node /app/public ./public
    USER node
    EXPOSE 3000
    HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=3 \
      CMD wget -qO- http://127.0.0.1:3000/api/health || exit 1
    CMD ["node", "server.js"]