import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Screen from './Screen.js'
import Sky from '../Sky/'
import Mosque from '../Mosque/'
import SkyObject from '../SkyObject/'
import Time from '../Time/'

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
        <Sky />
        <Time />
        <SkyObject />
        <Mosque />
      </Screen>
    )
  }
}

PrayerScreen.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrayerScreen)