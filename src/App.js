import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar/'
import Home from './containers/Home/'
import Prayers from './containers/Prayers/'
import Setting from './containers/Setting/'

import './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="body">
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

export default App