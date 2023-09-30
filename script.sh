#!/bin/bash
CHANGESET_FILE=$(find .changeset -name '*.md' ! -name README.md | head -n 1)

MAJOR=$(grep -E ': major' "$CHANGESET_FILE")
MINOR=$(grep -E ': minor' "$CHANGESET_FILE")
PATCH=$(grep -E ': patch' "$CHANGESET_FILE")

if [ "$MAJOR"]; then
  echo "Major bump here"
fi

if [ "$MINOR" ]; then
  echo "Minor bump here"
fi

if [ "$PATCH"]; then 
  echo "patch bump here"
fi
