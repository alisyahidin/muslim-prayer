import React from 'react'

import PrayerTime from '../contexts/PrayerTime'
import Timing from '../contexts/Timing'

const withTiming = Component => {
  return class extends React.Component {
    static contextType = PrayerTime

    state = {
      timing: 'day',
    }

    updateTiming = prayer => {
      const { getPrayerNow } = this.context

      this.setState(prevState => ({
        timing: getPrayerNow(prayer).id
      }))
    }

    render() {
      const { timing } = this.state

      return (
        <Timing.Provider
          value={{
            timing,
            updateTiming: this.updateTiming,
          }}
        >
          <Component />
        </Timing.Provider>
      )
    }
  }
}

export default withTiming