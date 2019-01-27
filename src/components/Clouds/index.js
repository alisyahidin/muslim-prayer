import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Cloud from './Cloud'
import Sun from '../Sun/'

import styles from './styles'
import { clouds } from '../../constants/'

class Clouds extends Component {
  static contextType = PrayerScreenAnimation

  render() {
    const { classes } = this.props
    const { scrolled } = this.context

    return (
      <>
        { clouds.map((cloud, i) => (
          <Cloud
            key={i}
            i={i+1}
            {...cloud}
            pose={scrolled ? 'chibi' : 'normal'}
            className={classes.cloud}
            alt="Cloud"
          />
        ))}
        <Sun />
      </>
    )
  }
}

Clouds.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Clouds)