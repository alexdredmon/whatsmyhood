import React from 'react'

import FlexCell from 'lib/components/layout/FlexCell'
import FlexColumn from 'lib/components/layout/FlexColumn'
import Text from 'lib/components/layout/Text'


class Neighborhood extends React.Component {
  render = () => {
    const {
      neighborhoods,
    }  = this.props

    return (
      <FlexColumn>
        <FlexCell>
          { neighborhoods && neighborhoods.map(neighborhood => (
            <Text
              key={neighborhood}
              style={{
                color: '#fff',
                fontSize: 40,
                fontWeight: 'bold',
              }}
            >
              { neighborhood }
            </Text>
          )) }
        </FlexCell>
      </FlexColumn>
    )
  }
}

export default Neighborhood
