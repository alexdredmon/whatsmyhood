import React from 'react'
import { StyleSheet, Text } from 'react-native'


export const TextMobile = props => {
  const {
    children,
    style,
  } = props

  const {
    cursor,
    textDecoration,
    ...restStyle
  } = style || {}
  const textDecorationLine = textDecoration

  return (
    <Text style={{
      ...restStyle,
      textDecorationLine,
    }}>
      { children }
    </Text>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 10,
    paddingTop: 50,
  },
})


export default TextMobile
