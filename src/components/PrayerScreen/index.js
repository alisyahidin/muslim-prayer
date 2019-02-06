import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { timer } from 'rxjs'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Timing from '../../contexts/Timing'
import Screen from './Screen.js'
import Sky from '../Sky/'
import Mosque from '../Mosque/'
import SkyObject from '../SkyObject/'
import Time from '../Time/'

import styles from './styles'

class PrayerScreen extends Component {
  static contextType = Timing

  componentDidMount() {
    const { updateTiming, prayerObserver, notificationObserver } = this.context

    updateTiming()
    this.subscription = timer(500, 1000)
      .subscribe(() => {
        prayerObserver()
        notificationObserver()
      })
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

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
            <Time />
            <SkyObject />
            <Mosque />
          </Screen>
        )}
      </PrayerScreenAnimation.Consumer>
    )
  }
}

PrayerScreen.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrayerScreen)