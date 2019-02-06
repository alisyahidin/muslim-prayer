import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

import LocationModal from '../LocationModal/'
import Navbar from '../Navbar/'
import Home from '../../containers/Home/'
import Prayers from '../../containers/Prayers/'
import Setting from '../../containers/Setting/'

import withTiming from '../../lib/withTiming'
import withPrayerTime from '../../lib/withPrayerTime'
import withPrayerScreenAnimation from '../../lib/withPrayerScreenAnimation'

import { showNotif, checkRequestPermission } from '../../utils/notification'
import db from '../../utils/database'

import styles from './styles'

class App extends Component {
  state = {
    openSetup: false
  }

  setupSaved = () => {
    this.setState({
      openSetup: false
    })
  }

  componentDidMount() {
    // check DB is has settings
    db.open().then(async db => {
      const count = await db.settings.count()
      if (count === 0) {
        this.setState({openSetup: true})
      }
    })

    // Test notification SW
    checkRequestPermission()
    interval(5000)
      .pipe(take(2))
      .subscribe(x => showNotif('Test Notification'))
  }

  render() {
    const { classes } = this.props
    const { openSetup } = this.state

    return (
      <Router>
        <div className={classes.container}>
          <div className={classes.body}>
            <LocationModal
              open={openSetup}
              handleClose={this.setupSaved}
              disableOnClose
            />

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

export default withPrayerTime(
  withTiming(
    withPrayerScreenAnimation(
      withStyles(styles)(App)
    )
  )
)