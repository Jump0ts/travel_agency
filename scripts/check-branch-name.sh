#!/bin/sh
# Only feature/* and hotfix/* branches can be pushed;
# develop and master change through pull requests.

BRANCH_NAME=$(git symbolic-ref --short HEAD)

if ! printf '%s\n' "$BRANCH_NAME" | grep -Eq '^(feature|hotfix)/[a-z0-9._-]+$'; then
  echo "❌ Invalid branch name: $BRANCH_NAME"
  echo "Use feature/<name> or hotfix/<name> (lowercase letters, digits, . _ -)"
  exit 1
fi

echo "✅ Branch name is valid: $BRANCH_NAME"