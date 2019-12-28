#!/bin/bash

echo 🚧 Building WhatsMyHood suite for commit $(git rev-parse HEAD)...

export WHATSMYHOOD_VERSION=$(git rev-parse HEAD)
docker-compose build

echo 📦 Built WhatsMyHood suite $(git rev-parse HEAD)
