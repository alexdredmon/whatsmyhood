export const conditionalItem = (condition, item) => {
  if (condition) {
    return [item]
  } else {
    return []
  }
}

export const getIn = (obj, keys) => {
  let keysArray = keys
  if (typeof keys === 'string') {
    keysArray = keys.split('.')
  }
  return keysArray.reduce(
    (xs, x) => (xs && xs[x]) ? xs[x] : null, obj
  )
}
