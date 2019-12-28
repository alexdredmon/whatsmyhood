import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, View } from 'react-native';


export const BodyMobile = props => (
  <View
    style={{
      ...styles.body,
      ...props.style,
      height: Math.round(Dimensions.get('window').height),
    }}
  >
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  body: {
    padding: 10,
    paddingTop: 50,
    paddingBottom: 90,
  },
})

export default BodyMobile
