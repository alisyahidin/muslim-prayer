import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import SvgMosque from './SvgMosque'

import mosque from '../../assets/mosque/mosque_day.svg'
import styles from './styles'

class Mosque extends Component {
  static contextType = PrayerScreenAnimation

  render() {
    const { classes } = this.props
    const { scrolled } = this.context

    return (
      <SvgMosque
        className={classes.mosque}
        pose={scrolled ? 'chibi' : 'normal'}
        src={mosque}
        alt="Mosque"
      />
    )
  }
}

Mosque.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Mosque)