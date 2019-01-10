import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

class Prayers extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.prayers}>
        <h1>Prayers</h1>
      </div>
    )
  }
}

Prayers.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Prayers)