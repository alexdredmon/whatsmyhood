import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import CircularProgress from '@material-ui/core/CircularProgress'
import LinearProgress from '@material-ui/core/LinearProgress'


const styles = theme => ({
  rootCircular: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '50px',
  },
  progressLinear: {
    backgroundColor: '#ff7070',
  },
  progressBarLinear: {
    backgroundColor: '#bfa8ec',
  }
})

class Loading extends React.Component {
  static defaultProps = {
    variant: 'linear'
  }

  renderCircular = () => {
    const { classes, condition } = this.props
    if (! condition) {
      return (
        <div style={{
          display: 'block',
          height: '4px',
        }}>
        </div>
      )
    }
    
    return (
      <div className={classes.rootCircular}>
        <CircularProgress size={50} />
      </div>
    )
  }

  renderLinear = () => {
    const { classes, condition } = this.props
    if (! condition) {
      return (
        <div
          style={{
            backgroundColor: '#fff',
            display: 'block',
            height: '4px',
          }}
        >
        </div>
      )
    }
    
    return (
      <div className={classes.root}>
        <LinearProgress
          classes={{
            colorPrimary: classes.progressLinear,
            barColorPrimary: classes.progressBarLinear,
          }}
        />
      </div>
    )
  }

  render = () => {
    const { variant } = this.props

    if (variant === 'linear') {
      return this.renderLinear()
    }
    if (variant === 'circular') {
      return this.renderCircular()
    }
  }
}

export default withStyles(styles)(Loading)
