import React from 'react'
import { connect } from 'react-redux'

import Snackbar from '../Snackbar'

import { getIn } from 'lib/core/util/iterable'
import { hideMessage } from 'lib/core/actions/flash'


class FlashMessage extends React.Component {
  render = () => {
    const { hideMessage, message, open, timeout, variant } = this.props

    if (! message) {
      return null
    }
    return (
      <div>
        <Snackbar
          autoHideDuration={timeout}
          open={open}
          message={message}
          variant={variant}
          handleClose={hideMessage}
        />
      </div>
    )
  }
}

export default connect(
  (state, props) => ({
    state: state,
    message: getIn(state, 'flash.message'),
    open: getIn(state, 'flash.open'),
    timeout: getIn(state, 'flash.timeout'),
    variant: getIn(state, 'flash.variant'),
  }),
  (dispatch, props) => ({
    hideMessage: () => dispatch(hideMessage()),
  }),
)(FlashMessage)
