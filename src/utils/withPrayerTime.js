import React from 'react'

import PrayerTime from '../contexts/PrayerTime'

const withPrayerTime = Component => {
  return class extends React.Component {
    state = {
      timing: {
        current: 'shubuh',
        next: undefined,
      }
    }

    updateTiming = prayer => {
      clearTimeout(this.timeoutNext)

      this.setState(prevState => ({
        timing: {
          current: typeof prevState.timing.next === 'undefined' ? prayer : prevState.timing.next,
          next: prayer
        }
      }))
    }

    clearTiming = () => {
      this.timeoutNext = setTimeout(() => {
        this.setState(prevState => ({
          timing: {
            current: prevState.timing.next,
            next: undefined,
          }
        }))
      }, 800)
    }

    componentWillUnmount() {
      clearTimeout(this.timeoutNext)
    }

    render() {
      const { timing } = this.state

      return (
        <PrayerTime.Provider
          value={{
            timing,
            clearTiming: this.clearTiming,
            updateTiming: this.updateTiming,
          }}
        >
          <Component />
        </PrayerTime.Provider>
      )
    }
  }
}

export default withPrayerTime