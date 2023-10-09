#!/bin/bash
CHANGESET_FILE=$(find .changeset -name '*.md' ! -name README.md | head -n 1)

MAJOR=$(grep -E ': major' "$CHANGESET_FILE")
MINOR=$(grep -E ': minor' "$CHANGESET_FILE")
PATCH=$(grep -E ': patch' "$CHANGESET_FILE")

if [ "$MAJOR"]; then
  npm run changeset:major
fi

if [ "$MINOR" ]; then
  npm run changeset:minor
fi

if [ "$PATCH"]; then 
  npm run changset:patch
fi