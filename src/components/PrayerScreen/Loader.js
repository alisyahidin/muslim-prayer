import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Screen from './Screen'
import Sky from '../Sky/'

import styles from './styles'

class PrayerScreenLoader extends Component {
  render() {
    const { classes } = this.props

    return (
      <PrayerScreenAnimation.Consumer>
        {({updateByTouch, scrolled}) => (
          <Screen
            className={classes.prayerScreen}
            onTouchMove={updateByTouch}
            pose={scrolled ? 'minimize' : 'maximize'}
          >
            <Sky />
          </Screen>
        )}
      </PrayerScreenAnimation.Consumer>
    )
  }
}

PrayerScreenLoader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrayerScreenLoader)