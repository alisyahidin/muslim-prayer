import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

class PrayerScreen extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.prayerScreen}>
        <h1>Prayer Screen</h1>
      </div>
    )
  }
}

PrayerScreen.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrayerScreen)