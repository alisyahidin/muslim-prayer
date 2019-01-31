import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Moment from 'react-moment'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Timing from '../../contexts/Timing'

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
      <Timing.Consumer>
        {({getPrayer}) => (
          <Wrapper pose={scrolled ? 'left' : 'center'} className={classes.time}>
            <Title>
              {getPrayer().name || 'Have a nice day'}
            </Title>
            <Clock className={classes.timing}>
              {getPrayer().time || <Moment format='HH:mm' />}
            </Clock>
          </Wrapper>
        )}
      </Timing.Consumer>
    )
  }
}

export default withStyles(styles)(Time)