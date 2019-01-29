import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import Timing from '../../contexts/Timing'
import Gradient from './Gradient'

import styles from './styles'

class Sky extends Component {
  static contextType = Timing

  componentWillUnmount() {
    const { updateTiming } = this.context

    updateTiming()
  }

  render() {
    const { classes } = this.props
    const { timing } = this.context

    return (
      <svg className={classes.sky} viewBox="0 0 375 812" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M375 0H0V812H375V0Z" fill="url(#sky)"/>
        <defs>
          <radialGradient id="sky" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(188 812) rotate(-90) scale(812 1044.28)">
          <Gradient timing={timing} />
          </radialGradient>
        </defs>
      </svg>
    )
  }
}

export default withStyles(styles)(Sky)