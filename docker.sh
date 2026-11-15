#!/usr/bin/env bash

DRY_RUN=false
if [[ "$1" == "--dry" ]]; then
  DRY_RUN=true
  echo "[DRY RUN] Push commands will be skipped."
fi

DOCKERFILE="Dockerfile"
REGISTRY="registry.git.fh-aachen.de/laborindustrierobotik/mitsubishi/rubikscube/wiki"
REPO=""

DEFAULT_VERSION=$(grep -E '^\s*version=' "$DOCKERFILE" | sed -E 's/.*version="([^"]+)".*/\1/')
DEFAULT_NAME=$(grep -E '.*name=' "$DOCKERFILE" | sed -E 's/.*name="([^"]+)".*/\1/')

read -rp "Enter image version tag [${DEFAULT_VERSION}]: " VERSION
VERSION=${VERSION:-$DEFAULT_VERSION}

read -rp "Enter full image prefix and name [$REGISTRY/$DEFAULT_NAME]: " IMAGE
IMAGE=${IMAGE:-$REGISTRY/$DEFAULT_NAME}

docker login registry.git.fh-aachen.de
docker build -t "$IMAGE:$VERSION" .

if [ "$DRY_RUN" = false ]; then
  docker push "$IMAGE:$VERSION"
else
  echo "[DRY RUN] Skipped: docker push $IMAGE:$VERSION"
fi

read -rp "Also tag as 'latest'? (y/N): " LATEST
if [[ "$LATEST" =~ ^[Yy]$ ]]; then
  docker tag "$IMAGE:$VERSION" "$IMAGE:latest"
  if [ "$DRY_RUN" = false ]; then
    docker push "$IMAGE:latest"
  else
    echo "[DRY RUN] Skipped: docker push $IMAGE:latest"
  fi
fi

echo "Done."
