import React from 'react'

import PrayerTime from '../contexts/PrayerTime'

const withPrayerTime = Component => {
  return class extends React.Component {
    state = {
      prayer: {
        current: 'shubuh',
        next: undefined,
      }
    }

    updatePrayer = prayer => {
      this.setState(prevState => ({
        prayer: {
          current: typeof prevState.prayer.next === 'undefined' ? prayer : prevState.prayer.next,
          next: prayer
        }
      }))
    }

    clearNext = () => {
      this.timeoutNext = setTimeout(() => {
        this.setState(prevState => ({
          prayer: {
            current: prevState.prayer.next,
            next: undefined,
          }
        }))
      }, 800)
    }

    componentWillUnmount() {
      clearTimeout(this.timeoutNext)
    }

    render() {
      const { prayer } = this.state

      return (
        <PrayerTime.Provider
          value={{
            prayer,
            clearNext: this.clearNext,
            updatePrayer: this.updatePrayer,
          }}
        >
          <Component />
        </PrayerTime.Provider>
      )
    }
  }
}

export default withPrayerTime