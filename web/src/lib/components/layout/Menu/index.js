
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MoreVertIcon from '@material-ui/icons/MoreVert'


const styles = theme => ({
  menu: {
    backgroundColor: '#00000011',
    root: {

      border: '1px solid red',
    },
    paper: {
      backgroundColor: 'red',
      border: '1px solid red',
    },
  },
  menuItem: {
    '&:focus': {
      backgroundColor: '#ffffff',
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
    '&:hover': {
      backgroundColor: '#eee',
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});


class MenuComponent extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    })
  }

  handleClickItem = item => {
    this.handleClose()
    item.action()
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
    })
  }

  render = () => {
    const { classes, items } = this.props
    const { anchorEl } = this.state

    return (
      <div>
        <IconButton
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          className={classes.menu}
          getContentAnchorEl={null}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          { items.map((item, i) => (
            <MenuItem
              className={classes.menuItem}
              key={i}
              onClick={() => this.handleClickItem(item)}              
              selected={false}
            >
              <ListItemIcon>
                {item.icon &&
                  item.icon
                }
              </ListItemIcon>
              <ListItemText>
                {item.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(MenuComponent)
