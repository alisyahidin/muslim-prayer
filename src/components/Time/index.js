import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import PrayerTimeContext from '../../contexts/PrayerTime'

import Wrapper from './Wrapper'
import Title from './Title'
import Clock from './Clock'
import Remaining from './Remaining'
import styles from './styles'

class Time extends Component {
  static contextType = PrayerScreenAnimation

  render() {
    const { classes } = this.props
    const { scrolled } = this.context

    return (
      <PrayerTimeContext.Consumer>
        {prayer => {
          return (
            <Wrapper pose={scrolled ? 'left' : 'center'} className={classes.time}>
              <Title pose={scrolled ? 'left' : 'center'}>
                {prayer.timing.current}
              </Title>
              <Clock pose={scrolled ? 'left' : 'center'}>
                12:07
              </Clock>
              <Remaining className={classes.timeLeft} pose={scrolled ? 'left' : 'center'}>
                55 minutes left
              </Remaining>
            </Wrapper>
          )
        }}
      </PrayerTimeContext.Consumer>
    )
  }
}

export default withStyles(styles)(Time)