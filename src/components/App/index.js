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

import styles from './styles'

class App extends Component {
  state = {
    installed: true
  }

  handleSetupSave = () => {
    this.setState({
      installed: true
    })
  }

  componentDidMount() {
    // check DB is has configs
  }

  render() {
    const { classes } = this.props
    const { installed } = this.state

    return (
      <Router>
        <div className={classes.container}>
          <div className={classes.body}>
            <Setup installed={installed} handleSetupSave={this.handleSetupSave} />

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