import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import MenuItem from '@material-ui/core/MenuItem'
import UpdateIcon from '@material-ui/icons/Update'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

import styles from './styles'

class Menu extends React.Component {
  render() {
    const { classes, anchorEl, closeMenu } = this.props
    const open = Boolean(anchorEl)

    return (
      <Popover
        id="simple-popper"
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
          onClick={this.handleClose}
        >
          <UpdateIcon className={classes.icon} />
          Update Time
        </MenuItem>
        <MenuItem
          className={classes.menu}
          onClick={this.handleClose}
        >
          <DeleteOutlineIcon className={classes.icon} />
          Delete Time
        </MenuItem>
      </Popover>
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