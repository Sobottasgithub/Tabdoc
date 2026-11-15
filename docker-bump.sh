#!/usr/bin/env bash
# set -euo pipefail

DOCKERFILE="./Dockerfile"
CICONFIG=".gitlab-ci.yml"

CURRENT_VERSION=$(grep -E 'version="' "$DOCKERFILE" | sed -E 's/.*version="([^"]+)".*/\1/')
if [[ -z "$CURRENT_VERSION" ]]; then
  echo "Could not find current version in $DOCKERFILE" >&2
  exit 1
fi

CI_VERSIONS=$(grep -Eo ':[0-9]+\.[0-9]+\.[0-9]+' "$CICONFIG" | tr -d ':')
CI_VERSIONS_UNIQ=$(echo "$CI_VERSIONS" | sort -u)

if [[ $(echo "$CI_VERSIONS_UNIQ" | wc -l) -ne 1 ]]; then
  echo "Multiple distinct versions found in $CICONFIG: $CI_VERSIONS_UNIQ" >&2
  exit 1
fi

CI_VERSION="$CI_VERSIONS_UNIQ"

if [[ "$CURRENT_VERSION" != "$CI_VERSION" ]]; then
  echo "Version mismatch between Dockerfile ($CURRENT_VERSION) and CI config ($CI_VERSION)" >&2
  exit 1
fi

echo "Current version: $CURRENT_VERSION"
read -rp "Enter new version: " NEW_VERSION

if [[ -z "$NEW_VERSION" ]]; then
  echo "No version entered. Aborting." >&2
  exit 1
fi

sed -i.bak -E "s/(version=\")$CURRENT_VERSION(\".*)/\1$NEW_VERSION\2/" "$DOCKERFILE"
sed -i.bak -E "s/:$CURRENT_VERSION/:$NEW_VERSION/g" "$CICONFIG"

echo "Updated $DOCKERFILE and $CICONFIG to version $NEW_VERSION"

