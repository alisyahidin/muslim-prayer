import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Timing from '../../contexts/Timing'
import Object from './Object'

import { skyObjects } from '../../constants/'
import styles from './styles'

class SkyObject extends Component {
  static contextType = Timing

  render() {
    const { classes } = this.props
    const { timing } = this.context

    return (
      <PrayerScreenAnimation.Consumer>
        {({scrolled}) =>
          skyObjects[timing].map((obj, i) => (
            <Object
              key={i}
              i={i+1}
              poseKey={timing}
              size={obj.size}
              bottom={obj.bottom}
              right={obj.right}
              src={obj.src}
              opacity={obj.opacity}
              pose={scrolled ? 'chibi' : 'normal'}
              className={classes.cloud}
              alt="Sky Object"
            />
          ))
        }
      </PrayerScreenAnimation.Consumer>
    )
  }
}

SkyObject.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SkyObject)