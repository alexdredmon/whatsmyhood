import { applyMiddleware } from 'redux'

import apiMiddleware from 'common/lib/core/middlewares/api'
import neighborhood from 'common/middlewares/neighborhood'


export default applyMiddleware(
  apiMiddleware,
  neighborhood,
)
