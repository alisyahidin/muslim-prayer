import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import HomeIcon from '@material-ui/icons/Home'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import SettingsIcon from '@material-ui/icons/Settings'
import { Link, withRouter } from 'react-router-dom'

import NavigationHeight from '../../utils/NavigationHeight'

import styles from './styles'

class Navbar extends Component {
  static contextType = NavigationHeight

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
    const { classes } = this.props
    const { screen } = this.state
    const { bottom } = this.context

    return (
      <Paper className={classes.navbar} style={{ bottom: bottom }}>
        <Tabs
          value={screen}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab className={classes.tab} component={Link} to="/" value="/" icon={<HomeIcon />} />
          <Tab className={classes.tab} component={Link} to="/prayers" value="/prayers" icon={<EventAvailableIcon />} />
          <Tab className={classes.tab} component={Link} to="/setting" value="/setting" icon={<SettingsIcon />} />
        </Tabs>
      </Paper>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(Navbar))