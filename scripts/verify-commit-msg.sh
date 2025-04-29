#!/bin/sh

COMMIT_MSG_FILE=$1
COMMIT_MSG=$(cat "$COMMIT_MSG_FILE")

echo "🔍 Checking commit message: $COMMIT_MSG"

regex="^(feat|hotfix)\([^)]+\): .+"

if ! echo "$COMMIT_MSG" | grep -Eq "$regex"; then
  echo "❌ Commit message inválido."
  echo "Debe seguir el formato: feat(nombre): descripcion o hotfix(nombre): descripcion"
  exit 1
fi

echo "✅ Commit message válido."