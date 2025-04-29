#!/bin/sh

COMMIT_MSG_FILE="$1"

if [ -z "$COMMIT_MSG_FILE" ]; then
  echo "❌ No commit message file provided"
  exit 1
fi

COMMIT_MSG=$(cat "$COMMIT_MSG_FILE")

PATTERN='^(feat|hotfix)\([a-zA-Z0-9_-]+\): .+'

if ! echo "$COMMIT_MSG" | grep -Eq "$PATTERN"; then
  echo "❌ Invalid commit message format."
  echo "✅ Allowed formats:"
  echo "   feat(nombre): descripción"
  echo "   hotfix(nombre): descripción"
  exit 1
fi