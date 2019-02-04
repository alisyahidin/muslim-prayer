import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Setup from '../Setup/'
import Navbar from '../Navbar/'
import Home from '../../containers/Home/'
import Prayers from '../../containers/Prayers/'
import Setting from '../../containers/Setting/'

import withTiming from '../../lib/withTiming'
import withPrayerTime from '../../lib/withPrayerTime'
import withPrayerScreenAnimation from '../../lib/withPrayerScreenAnimation'

import Timing from '../../contexts/Timing'

import styles from './styles'

class App extends Component {
  static contextType = Timing

  state = {
    installed: false
  }

  handleSetupSave = () => {
    this.setState({
      installed: true
    })
  }

  componentDidMount() {
    // check DB is has configs
    const { finishInitializing } = this.context
    setTimeout(() => finishInitializing(), 1000)

    // Test notification SW
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration()
        .then(function(reg) {
          setTimeout(() => {
            if (typeof reg !== 'undefined') {
              reg.showNotification('Hello world!')
            }
          }, 3000)
        });
    }
  }

  render() {
    const { classes } = this.props
    const { installed } = this.state
    const { init } = this.context

    return (
      <Router>
        <div className={classes.container}>
          <div className={classes.body}>
            {init && <h1>Checking storage . . .</h1>}
            {!init && (
              <>
                <Setup installed={installed} handleSetupSave={this.handleSetupSave} />

                <Route path="/" exact component={Home} />
                <Route path="/prayers" exact component={Prayers} />
                <Route path="/setting" exact component={Setting} />

                <Navbar />
              </>
            )}
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