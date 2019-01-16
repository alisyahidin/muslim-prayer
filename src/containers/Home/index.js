import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreen from '../../components/PrayerScreen/'
import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'

import styles from './styles'

class Home extends Component {
  static contextType = PrayerScreenAnimation

  render() {
    const { classes } = this.props

    return (
      <div
        className={classes.home}
        onWheel={this.context.updateByWheel}
      >
        <PrayerScreen />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)