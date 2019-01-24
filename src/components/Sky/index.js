import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import dzuhur from '../../assets/sky/dzuhur.png'
import styles from './styles'

class Sky extends Component {
  render() {
    const { classes } = this.props

    return (
      <img className={classes.sky} src={dzuhur} alt="Sky" />
    )
  }
}

export default withStyles(styles)(Sky)