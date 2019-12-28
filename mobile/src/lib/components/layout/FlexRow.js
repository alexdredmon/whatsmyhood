import React from 'react'
import { StyleSheet } from 'react-native'

import View from 'lib/components/layout/View'


export const FlexRowMobile = props => (
  <View
    style={{
    ...styles.body,
    }}
    {...props}
  />
)


const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
})

export default FlexRowMobile
