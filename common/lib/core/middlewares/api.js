import { API_BASE_URL, APP_NAMESPACE } from 'config'

import {
  API_GET,
  API_POST,
  SET_TOKEN,
  UNSET_TOKEN,
  setToken
} from '../actions/api'
import { INITIALIZE } from '../actions/lifecycle'
import Api from '../util/api'


const api = new Api(API_BASE_URL)

const apiMiddleware = store => next => action => {
  if (action) {
    if (action.type === API_GET) {
      api.get(
        action.path,
        action.params,
        (response) => action.callback && action.callback(response)
      )
    }

    else if (action.type === API_POST) {
      api.post(
        action.path,
        action.data,
        (response) => action.callback && action.callback(response)
      )
    }

    else if (action.type === SET_TOKEN) {
      window.localStorage.setItem(`${APP_NAMESPACE}:api.token`, action.token)
    }

    else if (action.type === UNSET_TOKEN) {
      window.localStorage.setItem(`${APP_NAMESPACE}:api.token`, '')
      api.token = undefined
    }

    else if (action.type === INITIALIZE) {
      const sessionToken = window.localStorage.getItem(`${APP_NAMESPACE}:api.token`)
      if (sessionToken) {
        store.dispatch(setToken(sessionToken))
      }
    }
    
    return next(action) 
  }
}

export default apiMiddleware
