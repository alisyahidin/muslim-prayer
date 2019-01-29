import React from 'react'

import PrayerTime from '../contexts/PrayerTime'
import Timing from '../contexts/Timing'

const withTiming = Component => {
  return class extends React.Component {
    static contextType = PrayerTime

    state = {
      current: 'noprayer',
      next: undefined,
    }

    updateTiming = prayer => {
      clearTimeout(this.timeoutNext)

      const { getPrayerNow } = this.context

      this.setState(prevState => ({
        current: typeof prevState.next === 'undefined' ? getPrayerNow(prayer).id : prevState.next,
        next: getPrayerNow(prayer).id
      }))
    }

    clearTiming = () => {
      this.timeoutNext = setTimeout(() => {
        this.setState(prevState => ({
          current: prevState.next,
          next: undefined,
        }))
      }, 800)
    }

    componentWillUnmount() {
      clearTimeout(this.timeoutNext)
    }

    render() {
      const { current, next } = this.state

      return (
        <Timing.Provider
          value={{
            current,
            next,
            clearTiming: this.clearTiming,
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