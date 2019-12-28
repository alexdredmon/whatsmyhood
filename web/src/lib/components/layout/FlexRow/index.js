import React from 'react'
import classNames from 'classnames'

import './styles.css'

class FlexRow extends React.Component {
  render = () => {
    const { children, className } = this.props
    return (
      <div className={classNames(
        'flex-row',
        className,
      )}>
        { children }
      </div>
    )
  }
}

export default FlexRow
