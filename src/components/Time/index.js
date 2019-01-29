import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Moment from 'react-moment'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import PrayerTimeContext from '../../contexts/PrayerTime'
import TimingContext from '../../contexts/Timing'

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
        {({getPrayerNow}) => (
          <TimingContext.Consumer>
            {({current}) => (
              <Wrapper pose={scrolled ? 'left' : 'center'} className={classes.time}>
                <Title pose={scrolled ? 'left' : 'center'}>
                  {getPrayerNow(current).name || 'Have a nice day'}
                </Title>
                <Clock pose={scrolled ? 'left' : 'center'}>
                  {getPrayerNow(current).time || <Moment format='HH:mm' />}
                </Clock>
                <Remaining className={classes.timeLeft} pose={scrolled ? 'left' : 'center'}>
                  55 minutes left
                </Remaining>
              </Wrapper>
            )}
          </TimingContext.Consumer>
        )}
      </PrayerTimeContext.Consumer>
    )
  }
}

export default withStyles(styles)(Time)