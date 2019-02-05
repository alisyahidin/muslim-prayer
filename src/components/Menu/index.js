import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import MenuItem from '@material-ui/core/MenuItem'
import UpdateIcon from '@material-ui/icons/Update'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

import DatePicker from '../DatePicker/'

import styles from './styles'

class Menu extends React.Component {
  state = {
    openDatePicker: true,
    type: 'update'
  }

  handleMenuItemClick = type => () => {
    this.props.closeMenu()

    this.setState({
      type,
      openDatePicker: true
    })
  }

  closeDatePicker = () => {
    this.setState({
      openDatePicker: false
    })
  }

  render() {
    const { openDatePicker, type } = this.state
    const { classes, anchorEl, closeMenu } = this.props
    const open = Boolean(anchorEl)

    return (
      <>
        <Popover
          id="menu-update"
          open={open}
          anchorEl={anchorEl}
          onClose={closeMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            className={classes.menu}
            onClick={this.handleMenuItemClick('update')}
          >
            <UpdateIcon className={classes.icon} />
            Update Time
          </MenuItem>
          <MenuItem
            className={classes.menu}
            onClick={this.handleMenuItemClick('delete')}
          >
            <DeleteOutlineIcon className={classes.icon} />
            Delete Time
          </MenuItem>
        </Popover>

        <DatePicker type={type} open={openDatePicker} handleClose={this.closeDatePicker} />
      </>
    )
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  anchorEl: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  closeMenu: PropTypes.func.isRequired
}

export default withStyles(styles)(Menu)