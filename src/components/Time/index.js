import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { PoseGroup } from 'react-pose'

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
        {({getPrayer, reminder}) => (
          <Wrapper pose={scrolled ? 'left' : 'center'} className={classes.time}>
            <PoseGroup>
              <Title key="title">
                {getPrayer().name}
              </Title>
              <Clock key="clock" className={classes.timing}>
                {getPrayer().time}
              </Clock>
              <Remaining key="remaining" className={classes.reminder}>
                {reminder}
              </Remaining>
            </PoseGroup>
          </Wrapper>
        )}
      </Timing.Consumer>
    )
  }
}

export default withStyles(styles)(Time)