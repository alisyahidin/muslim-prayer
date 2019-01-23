import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'

import Wrapper from './Wrapper'
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
      <Wrapper pose={scrolled ? 'left' : 'center'} className={classes.time}>
        <Prayer pose={scrolled ? 'left' : 'center'}>
          Dzuhur
        </Prayer>
        <PrayerTime pose={scrolled ? 'left' : 'center'}>
          12:07
        </PrayerTime>
        <Left className={classes.timeLeft} pose={scrolled ? 'left' : 'center'}>
          55 minutes left
        </Left>
      </Wrapper>
    )
  }
}

export default withStyles(styles)(Time)