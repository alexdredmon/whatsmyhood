import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { getIn } from 'lib/core/util/iterable'

import { dialogActions } from 'lib/core/actions/dialog'


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    const { hideDialog } = this.props
    hideDialog()
  };

  render() {
    const {
      actions,
      body,
      title,
      open,
    } = this.props

    return (
      <div>
        <Dialog
          open={open || false}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {title || <div />}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {body}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {actions.map((action, i) => (
              <Button
                key={i}
                onClick={action.action}
              >
                {action.label}
              </Button>
            ))}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    actions: getIn(state, 'dialog.actions'),
    body: getIn(state, 'dialog.body'),
    title: getIn(state, 'dialog.title'),
    open: getIn(state, 'dialog.open'),
  }),
  (dispatch, props) => ({
    ...dialogActions(dispatch, props),
  }),
)(AlertDialogSlide)
