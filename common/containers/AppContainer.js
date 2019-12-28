import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import Body from 'lib/components/layout/Body'

import NeighborhoodContainer from 'common/containers/NeighborhoodContainer'

import middlewares from 'common/middlewares'
import reducers from 'common/reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(middlewares)
)

class AppContainer extends React.Component {
  render = () => {
    return (
      <Provider store={store}>
        <Body
          headerHeight={90}
          style={{
            backgroundColor: '#171717',
          }}
        >
          <NeighborhoodContainer />
        </Body>
      </Provider>
    )
  }
}

export default AppContainer
