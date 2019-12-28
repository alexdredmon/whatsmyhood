import React from 'react'

import Text from 'lib/components/layout/Text'


export const ErrorMessage = props => (
  <Text
    style={{
      color: '#ff3737',
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
    }}
  >
    { props.message }
  </Text>
)

export default ErrorMessage
