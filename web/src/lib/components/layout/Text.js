import React from 'react'


export const TextWeb = props => {
  const {
    children,
    style,
  } = props

  return (
    <span style={{
      ...style,
    }}>
      { children }
    </span>
  )
}

export default TextWeb
