import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: '0 auto',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

export class PaperSheet extends React.Component {
  static defaultProps = {
    elevation: 1,
  }
  render = () => {
    const { children, classes, elevation, maxWidth } = this.props

    return (
      <div style={{ maxWidth: maxWidth, margin: '15px auto' }}>
        <Paper className={classes.root} elevation={elevation}>
          { children }
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(PaperSheet)
