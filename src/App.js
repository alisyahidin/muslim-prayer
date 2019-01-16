import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Navbar from './components/Navbar/'
import Home from './containers/Home/'
import Prayers from './containers/Prayers/'
import Setting from './containers/Setting/'

import withNavigationHeight from './contexts/withNavigationHeight'

import './App.scss'
import styles from './App.style'

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

export default withNavigationHeight(
  withStyles(styles)(App)
)