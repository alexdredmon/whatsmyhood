export const REQUEST_LOCATION = 'neighborhood/REQUEST_LOCATION'
export const SET_ERROR = 'neighborhood/SET_ERROR'
export const SET_LOCATION = 'neighborhood/SET_LOCATION'


export const requestLocation = () => ({
  type: REQUEST_LOCATION,
})

export const setError = error => ({
  type: SET_ERROR,
  error,
})

export const setLocation = (latitude, longitude) => ({
  type: SET_LOCATION,
  latitude,
  longitude,
})
