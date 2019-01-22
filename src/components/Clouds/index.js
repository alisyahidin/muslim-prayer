import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Cloud from './Cloud'

import cloud1 from '../../assets/clouds/1.svg'
import cloud2 from '../../assets/clouds/2.svg'
import cloud3 from '../../assets/clouds/3.svg'
import cloud4 from '../../assets/clouds/4.svg'
import cloud5 from '../../assets/clouds/5.svg'

import styles from './styles'

class Clouds extends Component {
  static contextType = PrayerScreenAnimation

  render() {
    const { classes } = this.props
    const { scrolled } = this.context

    return (
      <>
        <Cloud
          pose={scrolled ? 'chibi' : 'normal'}
          bottom={33}
          right={8}
          className={classes.cloud}
          src={cloud1}
          alt="Cloud"
        />
        <Cloud
          pose={scrolled ? 'chibi' : 'normal'}
          bottom={25}
          right={45}
          className={classes.cloud}
          src={cloud2}
          alt="Cloud"
        />
        <Cloud
          pose={scrolled ? 'chibi' : 'normal'}
          bottom={40}
          right={54}
          className={classes.cloud}
          src={cloud3}
          alt="Cloud"
        />
        <Cloud
          pose={scrolled ? 'chibi' : 'normal'}
          bottom={54}
          right={38}
          className={classes.cloud}
          src={cloud4}
          alt="Cloud"
        />
        <Cloud
          pose={scrolled ? 'chibi' : 'normal'}
          bottom={43}
          right={17}
          className={classes.cloud}
          src={cloud5}
          alt="Cloud"
        />
      </>
    )
  }
}

Clouds.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Clouds)