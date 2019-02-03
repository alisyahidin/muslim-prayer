import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Timing from '../../contexts/Timing'
import MosqueWrapper from './MosqueWrapper'
import MosqueImg from './MosqueImg'

import mosqueDay from '../../assets/mosque/mosque_day.svg'
import mosqueNight from '../../assets/mosque/mosque_night.svg'
import styles from './styles'

import { betweenHours } from '../../utils/time'

class Mosque extends Component {
  static contextType = Timing

  render() {
    const { classes } = this.props
    const { timing } = this.context

    const conditionTime = timing === 'dzuhur' || timing === 'ashar' || (timing === 'day' && (!betweenHours('18:00', '18:30') && !betweenHours('04:00', '05:00')))

    return (
      <PrayerScreenAnimation.Consumer>
        {({scrolled}) => (
          <MosqueWrapper
            className={classes.wrapper}
            pose={scrolled ? 'chibi' : 'normal'}
          >
            <MosqueImg
              className={classes.mosque}
              pose={conditionTime ? 'show' : 'hide'}
              src={mosqueDay}
              alt="Mosque"
            />
            <MosqueImg
              className={classes.mosque}
              pose={conditionTime ? 'hide' : 'show'}
              src={mosqueNight}
              alt="Mosque"
            />
          </MosqueWrapper>
        )}
      </PrayerScreenAnimation.Consumer>
    )
  }
}

Mosque.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Mosque)