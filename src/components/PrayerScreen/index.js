import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'

import styles from './styles'

class PrayerScreen extends Component {
  static contextType = PrayerScreenAnimation

  handleClick = e => {
    const { height, updateByWheel } = this.context

    if (height === '35%')
      updateByWheel({deltaY: 0})
  }

  render() {
    const { classes } = this.props
    const { height, updateByTouch } = this.context

    return (
      <div
        className={classes.PrayerScreen}
        onTouchMove={updateByTouch}
        style={{ height: height }}
        onClick={this.handleClick}
      >
        <h1>Prayer Screen</h1>
      </div>
    )
  }
}

PrayerScreen.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrayerScreen)