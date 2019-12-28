export const toUrlParams = data => {
  return Object.keys(data).map(
    key => `${key}=${encodeURIComponent(data[key])}`
  ).join('&')
}
