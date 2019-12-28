#!/bin/bash

./build.sh

echo 🚀 Deploying WhatsMyHood suite commit $(git rev-parse HEAD)...

docker push gcr.io/savecrate/whatsmyhood-api:$(git rev-parse HEAD)

kubectl set image deployment/whatsmyhood-api whatsmyhood-api=gcr.io/savecrate/whatsmyhood-api:$(git rev-parse HEAD)

echo 🏁 Deployed WhatsMyHood API commit $(git rev-parse HEAD)!
