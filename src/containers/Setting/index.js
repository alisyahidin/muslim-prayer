import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import menu from './menu'
import styles from './styles'

class Setting extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.setting}>
        <List
          className={classes.lists}
          component="nav"
        >
          {menu.map((menu, i) => (
            <ListItem key={i} className={classes.list} button>
              <ListItemIcon>
                {menu.icon(classes.icon)}
              </ListItemIcon>
              <ListItemText
                classes={{
                  root: classes.textRoot,
                  primary: classes.text
                }}
                primary={menu.name}
              />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

Setting.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Setting)