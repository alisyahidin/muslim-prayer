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

class Clouds extends Component {
  static contextType = PrayerScreenAnimation

  render() {
    const { classes } = this.props
    const { scrolled } = this.context

    return (
      <>
        <Cloud
          pose={scrolled ? 'chibi' : 'normal'}
          bottom={35}
          right={11}
          className={classes.cloud}
          src={cloud1}
          alt="Cloud"
        />
        <Cloud
          pose={scrolled ? 'chibi' : 'normal'}
          bottom={28}
          right={57}
          className={classes.cloud}
          src={cloud2}
          alt="Cloud"
        />
        <Cloud
          pose={scrolled ? 'chibi' : 'normal'}
          bottom={40}
          right={47}
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
          bottom={47}
          right={17}
          className={classes.cloud}
          src={cloud5}
          alt="Cloud"
        />
        <Sun />
      </>
    )
  }
}

Clouds.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Clouds)