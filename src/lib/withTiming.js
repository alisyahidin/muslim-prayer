import React from 'react'

import PrayerTime from '../contexts/PrayerTime'
import Timing from '../contexts/Timing'

import { betweenHours } from '../utils/time'

const withTiming = Component => {
  return class extends React.Component {
    static contextType = PrayerTime

    state = {
      init: true,
      timing: 'day',
    }

    finishInitializing = () => {
      this.setState({
        init: false
      })
    }

    updateTiming = prayer => {
      const timing = typeof prayer !== 'undefined'
        ? prayer
        : this.dayOrNight()

      this.setState(prevState => ({
        timing
      }))
    }

    getPrayer = () => {
      const { getPrayerData } = this.context
      const { timing } = this.state
      const result = getPrayerData(timing) !== null
        ? getPrayerData(timing)
        : { name: '', time: '' }

      return result
    }

    dayOrNight = () => {
      return betweenHours('05:00', '18:30') ? 'day' : 'night'
    }

    componentDidMount() {
      const { current, next } = this.context

      console.log(current, next)

      this.updateTiming()
    }

    render() {
      const { timing, init } = this.state

      return (
        <Timing.Provider
          value={{
            timing,
            init,
            finishInitializing: this.finishInitializing,
            updateTiming: this.updateTiming,
            getPrayer: this.getPrayer,
          }}
        >
          <Component />
        </Timing.Provider>
      )
    }
  }
}

export default withTiming