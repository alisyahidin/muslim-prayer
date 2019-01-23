import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'

import Prayer from './Prayer'
import PrayerTime from './PrayerTime'
import Left from './Left'
import styles from './styles'

class Time extends Component {
  static contextType = PrayerScreenAnimation

  render() {
    const { classes } = this.props
    const { scrolled } = this.context

    return (
      <div onClick={this.changeView} className={classes.time}>
        <Prayer pose={scrolled ? 'left' : 'center'}>
          Dzuhur
        </Prayer>
        <PrayerTime pose={scrolled ? 'left' : 'center'}>
          12:07
        </PrayerTime>
        <Left className={classes.timeLeft} pose={scrolled ? 'left' : 'center'}>
          55 minutes left
        </Left>
      </div>
    )
  }
}

export default withStyles(styles)(Time)