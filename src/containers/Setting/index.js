import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

class Setting extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.setting}>
        <h1>Setting</h1>
      </div>
    )
  }
}

Setting.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Setting)