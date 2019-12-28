
import React from 'react'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import { styles, theme } from 'lib/components/theme'

export class TextFieldComponent extends React.Component {
  static defaultProps = {
    label: 'Enter Text...',
    variant: 'outlined',
  }
  render = () => {
    return (
      <MuiThemeProvider theme={theme}>
        <TextField
          fullWidth
          inputProps={{
            name: this.props.name,
          }}
          { ...this.props }
        />
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(TextFieldComponent);
