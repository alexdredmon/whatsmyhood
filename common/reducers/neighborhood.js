import { apiStoreReducer } from 'common/lib/core/reducers/api'

import {
  REQUEST_LOCATION,
  SET_ERROR,
  SET_LOCATION,
} from 'common/actions/neighborhood'

const initialState = {
  error: null,
  latitude: undefined,
  longitude: undefined,
  neighborhoods: undefined,
  neighborhoods_loading: true,
}

const neighborhoodReducer = (state=initialState, action) => {
  const apiResponse = apiStoreReducer('neighborhood')(state, action)
  if (apiResponse) {
    return apiResponse
  }

  if (action.type  === REQUEST_LOCATION) {
    return {
      ...state,
      error: null,
      neighborhoods: null,
      neighborhoods_loading: true,
    }
  }

  if (action.type === SET_ERROR) {
    return {
      ...state,
    error: action.error,
    }
  }

  if (action.type === SET_LOCATION) {
    return {
      ...state,
      latitude: action.latitude,
      longitude: action.longitude,
    }
  }

  return state
}

export default neighborhoodReducer
