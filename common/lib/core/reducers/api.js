import { 
  SET_LOADING,
  SET_TOKEN,
  STORE_RESPONSE,
  UNSET_TOKEN
} from '../actions/api'


const getPathArray = action => {
  let pathArray = action.path
  if (typeof pathArray === 'string') {
    pathArray = pathArray.split('.')
  }
  return pathArray
}

export const apiStoreReducer = path => (state, action) => {
  if (action.type === STORE_RESPONSE) {
    const pathArray = getPathArray(action)
    const key = pathArray[pathArray.length - 1]
    if (pathArray[0] === path) {
      pathArray.shift()
      return {
        ...state,
        [pathArray]: action.response[pathArray[pathArray.length - 1]],
        [`${key}_loading`]: false,
        [`${key}_page`]: action.response['page'],
        [`${key}_page_size`]: action.response['page_size'],
        [`${key}_total`]: action.response['total'],
      }
    }
  }

  else if (action.type === SET_LOADING) {
    const pathArray = getPathArray(action)
    if (pathArray[0] === path) {
      return {
        ...state,
        [`${pathArray[pathArray.length - 1]}_loading`]: true,
      }
    }
  }
}

const initialState = {
  token: undefined,
}

export const apiReducer = (state=initialState, action) => {
  if (action.type === SET_TOKEN) {
    return {
      ...state,
      token: action.token,
    }
  } else if (action.type === UNSET_TOKEN) {
    return {
      ...state,
      token: undefined,
    }
  }
  return state
}
