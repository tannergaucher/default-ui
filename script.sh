#!/bin/bash
CHANGESET_FILE=$(find .changeset -name '*.md' ! -name README.md | head -n 1)
CHANGESET_LINES=$(cat "$CHANGESET_FILE")



MAJOR=$(grep -o '"semantic-styles": major' <<< "$CHANGESET_LINES")
MINOR=$(grep -o '"semantic-styles": minor' <<< "$CHANGESET_LINES")
PATCH=$(grep -o '"semantic-styles": patch' <<< "$CHANGESET_LINES")

echo "minor ${MINOR}"

if [ -n "$MAJOR"]; then
  echo "Major bump"

if [ -n "$MINOR" ]; then
  echo "Minor bump"

if [ -n "$PATCH"]; then 
  echo "patch bump"
fi