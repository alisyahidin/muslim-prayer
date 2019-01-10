import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import PrayerScreen from '../../components/PrayerScreen/'

import styles from './styles'

class Home extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.home}>
        <PrayerScreen />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)