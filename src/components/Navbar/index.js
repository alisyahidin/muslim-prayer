import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import HomeIcon from '@material-ui/icons/Home'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import SettingsIcon from '@material-ui/icons/Settings'
import { Link, withRouter } from 'react-router-dom'

import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import Bar from './Bar.js'
import styles from './styles'

class Navbar extends Component {
  static contextType = PrayerScreenAnimation

  state = {
    screen: '/',
  }

  handleChange = (event, screen) => {
    if (screen === '/')
      this.context.updateByWheel({deltaY: -21})

    this.setState({ screen })
  }

  componentDidMount() {
    const { location } = this.props
    const { screen } = this.state

    if (screen !== location.pathname) {
      this.setState({ screen: location.pathname })
    }
  }

  render() {
    const { classes, location } = this.props
    const { screen } = this.state
    let { scrolled } = this.context

    if (location.pathname !== '/')
      scrolled = true

    return (
      <Bar className={classes.navbar} pose={scrolled ? 'show' : 'hide'}>
        <Tabs
          value={screen}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            className={classes.tab}
            component={Link}
            to="/"
            value="/"
            icon={<HomeIcon className={classes.icon} />}
          />
          <Tab
            className={classes.tab}
            component={Link}
            to="/prayers"
            value="/prayers"
            icon={<EventAvailableIcon className={classes.icon} />}
          />
          <Tab
            className={classes.tab}
            component={Link}
            to="/setting"
            value="/setting"
            icon={<SettingsIcon className={classes.icon} />}
          />
        </Tabs>
      </Bar>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(Navbar))