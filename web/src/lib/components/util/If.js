import React from 'react'


class If extends React.Component {
  render = () => {
    const { children, condition } = this.props

    if (condition) {
      return children
    }
    return null
  }
}

export default If
