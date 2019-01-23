import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Cloud from './Cloud'
import Sun from '../Sun/'

import cloud1 from '../../assets/clouds/1.svg'
import cloud2 from '../../assets/clouds/2.svg'
import cloud3 from '../../assets/clouds/3.svg'
import cloud4 from '../../assets/clouds/4.svg'
import cloud5 from '../../assets/clouds/5.svg'

import styles from './styles'

const clouds = [
  {
    size: 100,
    bottom: 35,
    right: 11,
    src: cloud1
  },
  {
    size: 100,
    bottom: 28,
    right: 57,
    src: cloud2
  },
  {
    size: 75,
    bottom: 42,
    right: 47,
    src: cloud3
  },
  {
    size: 80,
    bottom: 54,
    right: 38,
    src: cloud4
  },
  {
    size: 90,
    bottom: 47,
    right: 17,
    src: cloud5
  },
]

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