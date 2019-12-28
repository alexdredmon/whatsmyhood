export const API_GET = 'CORE.API.API_GET'
export const API_POST = 'CORE.API.API_POST'
export const SET_LOADING = 'CORE.API.SET_LOADING'
export const STORE_RESPONSE = 'CORE.API.STORE_RESPONSE'
export const SET_TOKEN = 'CORE.API.SET_TOKEN'
export const UNSET_TOKEN = 'CORE.API.UNSET_TOKEN'


export const apiGet = (path, params, callback) => ({
  type: API_GET,
  callback: callback,
  params: params,
  path: path,
})

export const apiPost = (path, data, callback) => ({
  type: API_POST,
  data: data,
  callback: callback,
  path: path,
})

export const setLoading = path => ({
    type: SET_LOADING,
    path: path,
})

export const storeResponse = path => response => ({
  type: STORE_RESPONSE,
  path: path,
  response: response,
})

export const setToken = token => ({
  type: SET_TOKEN,
  token: token,
})

export const unsetToken = () => ({
  type: UNSET_TOKEN,
})

export const apiActions = (dispatch, props) => ({
  apiGet: (...params) => dispatch(apiGet(...params)),
  apiPost: (...params) => dispatch(apiPost(...params)),
  setToken: (...params) => dispatch(setToken(...params)),
  storeResponse: path => (...params) => dispatch(storeResponse(path)(...params)),
  setLoading: (...params) => dispatch(setLoading(...params)),
})
