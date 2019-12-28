import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';


export const ViewMobile = props =>  {
  const {
    onClick: onPress,
    ...rest
  } = props

  const Component = onPress ? TouchableOpacity : View
  return <Component onPress={onPress} {...rest} />
}

export default ViewMobile
