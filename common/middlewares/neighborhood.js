import {
  apiGet,
  storeResponse,
} from 'common/lib/core/actions/api'

import {
  REQUEST_LOCATION,
  setError,
  SET_LOCATION,
  setLocation,
} from 'common/actions/neighborhood'

const gameMiddleware = store => next => action => {
  if (action) {
    if (action.type === REQUEST_LOCATION) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            store.dispatch(setLocation(position.coords.latitude, position.coords.longitude))
          },
          error => {
            store.dispatch(setError(error.message))
          },
          {
            enableHighAccuracy: false,
            maximumAge: 0,
          }
        )
      }
    }

    if (action.type === SET_LOCATION) {
      store.dispatch(
        apiGet(
          'neighborhood',
          {
            latitude: action.latitude,
            longitude: action.longitude,
          },
          response => store.dispatch(
            storeResponse('neighborhood.neighborhoods')(response)
          )
        )
      )
    }
  }
  return next(action)
}
export default gameMiddleware
