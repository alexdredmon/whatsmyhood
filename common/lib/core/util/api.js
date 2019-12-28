import { API_BASE_URL, APP_NAMESPACE } from 'config'
import { toUrlParams } from './url'


export class Api {
  getToken = () => {
    if (! this.token) {
      if (! window || ! window.localStorage) {
        return null
      }
      const sessionToken = window.localStorage.getItem(`${APP_NAMESPACE}:api.token`)
      if (sessionToken) {
        this.token = sessionToken
      }
    }
    return this.token
  }

  getAuthHeaders = () => {
    const token = this.getToken()
    if (! token) {
      return {}
    }
    return {
      'Authorization': `Token ${token}`,
    }
  }

  handleError(error, callback) {
    console.log(`Error: ${error}`)
    callback(error)
  }

  handleResponse(response, callback) {
    return response.json()
      .then(json => callback && callback(json))
      .catch(error => this.handleError(error, callback))
  }

  get(path, params = {}, callback = () => {}) {
    const url = `${API_BASE_URL}/${path}?${toUrlParams(params)}`
    return fetch(url, {
      headers: {
        ...this.getAuthHeaders(),
      }
    }).then(
      response => this.handleResponse(response, callback)
    )
  }

  post(path, data, callback = () => {}) {
    const url = `${API_BASE_URL}/${path}`
    return fetch(url, {
      method: "POST",
      headers: {
        ...this.getAuthHeaders(),
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data)
    }).then(
      response => this.handleResponse(response, callback)
    )
  }
}

export default Api
