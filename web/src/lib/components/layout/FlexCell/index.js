import React from 'react'

export const FlexCellWeb = props => {
  const {
    alignItems,
    justifyContent,
    style,
    ...rest
  } = props

  return (
    <div
      style={{
        alignItems: alignItems || 'center',
        flex: 1,
        display: 'flex',
        justifyContent: justifyContent || 'center',
        flexDirection: 'column',
        ...style,
      }}
      {...rest}
    >
      { props.children }
    </div>
  )
}

export default FlexCellWeb
