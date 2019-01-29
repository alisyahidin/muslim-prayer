import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Obj from './Obj'
import Sun from '../Sun/'

import styles from './styles'
import { clouds } from '../../constants/'

class SkyObject extends Component {
  static contextType = PrayerScreenAnimation

  render() {
    const { classes } = this.props
    const { scrolled } = this.context

    return (
      <>
        { clouds.map((cloud, i) => (
          <Obj
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

SkyObject.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SkyObject)