import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Screen from './Screen.js'
import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'

import styles from './styles'

class PrayerScreen extends Component {
  static contextType = PrayerScreenAnimation

  render() {
    const { classes } = this.props
    const { scrolled, updateByTouch } = this.context

    return (
      <Screen
        className={classes.prayerScreen}
        onTouchMove={updateByTouch}
        pose={scrolled ? 'minimize' : 'maximize'}
      >
        <h1>Prayer Screen</h1>
      </Screen>
    )
  }
}

PrayerScreen.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrayerScreen)