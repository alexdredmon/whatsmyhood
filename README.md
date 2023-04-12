# What's My Hood 📍
https://whatsmyhood.com

Answering the eternal question "is this Greenpoint or Williamsburg?"

## Bookmarklet
Add the following bookmarklet to indicate the neighborhood you're currently centered on in Google Maps:
```
javascript:(function()%7Bconst%20x%20%3D%20window.location.href%3B%0Aconst%20y%20%3D%20x.split('%40')%3B%0Aif%20(y.length%20%3E%201)%20%7B%0A%20%20const%20z%20%3D%20y%5B1%5D.split('%2C')%0A%20%20if%20(z.length%20%3E%201)%20%7B%0A%20%20%20%20fetch(%60https%3A%2F%2Fapi.whatsmyhood.com%2Fneighborhood%3Flatitude%3D%24%7Bz%5B0%5D%7D%26longitude%3D%24%7Bz%5B1%5D%7D%60)%0A%20%20%20%20.then(response%20%3D%3E%20response.json())%0A%20%20%20%20.then(data%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20neighborhoods%20%3D%20data.neighborhoods%3B%0A%20%20%20%20%20%20const%20joined%20%3D%20neighborhoods.join('%5Cn')%0A%20%20%20%20%20%20window.alert(joined)%0A%20%20%20%20%7D)%0A%20%20%7D%0A%7D%7D)()%3B
```

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



## Screenshot

![Mobile App Screenshot](https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/f9/28/99/f9289944-9b92-05e2-8682-af4ee6b5890f/pr_source.png/460x0w.png "Mobile App Screenshot")
