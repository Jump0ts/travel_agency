#!/bin/sh

# Obtiene el nombre de la rama actual
BRANCH_NAME=$(git symbolic-ref --short HEAD)

# Define el patrón de nombres válidos para las ramas
VALID_BRANCH_REGEX="^(feature|hotfix)\/RDAGENCY-[0-9]+(_.*)?$"

# Verifica si la rama cumple con el patrón
if [[ ! "$BRANCH_NAME" =~ $VALID_BRANCH_REGEX ]]; then
  echo "❌ Invalid branch name: $BRANCH_NAME"
  echo "Branch names must follow this pattern: feature/RDAGENCY-* or hotfix/RDAGENCY-*"
  exit 1
fi

echo "✅ Branch name is valid: $BRANCH_NAME"
