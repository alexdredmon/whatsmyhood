# What's My Hood 📍
Answering the eternal question "is this Greenpoint or Williamsburg?"

## Setup

You can run the API locally or just point to the production API to retrieve and cache neighborhood location data.  If you aren't interested in running the API locally, you can skip straight to "Client" setup instructions.

### API

Initialize submodules:
```bash
git submodule update --init --recursive
```

Acquire a [Google Maps GeoCoding API key](https://developers.google.com/maps/documentation/geocoding/get-api-key) and set `GOOGLE_MAPS_API_KEY` in `api/.env`

In `api`, build containers and bring up the DB:
```bash
docker-compose build
docker-compose up -d db
```

Create DB schema:
```bash
docker-compose up migrate
```

And bring up the API:
```bash
docker-compose up -d api
```

Update your `API_BASE_URL` in `common/config.js` to point to your container (e.g. http://localhost:50005, or update config to support hitting via Docker proxy)

### Client

The client consists of Mobile and Web implementations:

#### Mobile

Install dependencies in `./mobile` via:
```bash
yarn
```

#### Web

Install dependencies in `./web` via:
```bash
yarn
```

## Run

#### Mobile

Start the app via in `./mobile` via:
```bash
yarn start
```
You'll need the [Expo client (Android & iOS)](https://expo.io/tools#client) to view the app on your mobile device, or [XCode developer tools](https://developer.apple.com/xcode/) to check it out via emulator on desktop.

#### Web

Start the app in `./web` via:
```bash
yarn start
```


![Mobile App Screenshot](https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/f9/28/99/f9289944-9b92-05e2-8682-af4ee6b5890f/pr_source.png/460x0w.png "Mobile App Screenshot")
