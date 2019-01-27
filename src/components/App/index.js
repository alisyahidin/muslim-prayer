import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Navbar from '../Navbar/'
import Home from '../../containers/Home/'
import Prayers from '../../containers/Prayers/'
import Setting from '../../containers/Setting/'

import withTiming from '../../utils/withTiming'
import withPrayerTime from '../../utils/withPrayerTime'
import withPrayerScreenAnimation from '../../utils/withPrayerScreenAnimation'

import styles from './styles'

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <Router>
        <div className={classes.container}>
          <div className={classes.body}>
            <Route path="/" exact component={Home} />
            <Route path="/prayers" exact component={Prayers} />
            <Route path="/setting" exact component={Setting} />

            <Navbar />
          </div>
        </div>
      </Router>
    )
  }
}

export default withTiming(
  withPrayerTime(
    withPrayerScreenAnimation(
      withStyles(styles)(App)
    )
  )
)