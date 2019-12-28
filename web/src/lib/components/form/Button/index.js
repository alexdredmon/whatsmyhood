import React from 'react'
import Button from '@material-ui/core/Button'


export class ButtonComponent extends React.Component {
  static defaultProps = {
    variant: "contained"
  }
  render = () => {
    const { children } = this.props

    return (
      <Button
        fullWidth
        color="primary"        
        className="button_text"
        style={{ marginTop: 7 }}
        { ...this.props }
      >
        { children }
      </Button>
    )
  }
}

export default ButtonComponent
