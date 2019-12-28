import { createSelector } from 'reselect'

export const api = (state, props) => state.api

export const isLoggedIn = createSelector(api, api => api.token ? true : false)
