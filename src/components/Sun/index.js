import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import SunImg from './SunImg'

import sun from '../../assets/sun/sun.svg'
import styles from './styles.js'


class Sun extends Component {
  static contextType = PrayerScreenAnimation

  render() {
    const { classes } = this.props
    const { scrolled } = this.context

    return (
      <SunImg
        pose={scrolled ? 'chibi' : 'normal'}
        bottom={47}
        right={57}
        className={classes.sun}
        src={sun}
        alt="Sun"
      />
    )
  }
}

Sun.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Sun)