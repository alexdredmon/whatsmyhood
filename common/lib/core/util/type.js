import { toLowerCase } from 'lib/core/util/string'

export const asBoolean = val => {
  switch(toLowerCase(val)) {
    case 'true':
      return true
    case '1':
      return true
    case 'false':
      return false
    case '0':
      return false
    case 'null':
      return false
    case 'undefined':
      return false
    default:
      return val ? true : false
  }
}
