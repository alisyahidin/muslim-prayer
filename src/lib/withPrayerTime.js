import React from 'react'
import moment from 'moment'

import PrayerTimeContext from '../contexts/PrayerTime'
import { prayerTime } from '../constants/'

const withPrayerTime = Component => {
  return class extends React.Component {
    state = {
      current: null,
      next: null,
      prayers: [
      ]
    }

    getPrayerData = prayer => {
      const { prayers } = this.state
      const count = prayers.filter(prayerState => prayerState.id === prayer)

      return count.length > 0 ? count.shift() : null
    }

    getNearestPrayer = () => {
      const { prayers } = this.state
      const current = prayers.filter(prayer => moment().isAfter(moment(prayer.time, 'HH:mm')))
      const next = prayers.filter(prayer => moment().isBefore(moment(prayer.time, 'HH:mm')))

      this.setState({
        current: current.length > 0 ? current.pop() : null,
        next: next.length > 0 ? next.shift() : null
      })
    }

    setPrayerTime = () => {
      // get prayers data depends date range

      // set state for today
      if (this.state.prayers.length === 0) {
        this.setState({
          prayers: prayerTime
        })
      }
    }

    render() {
      const { prayers, current, next } = this.state

      return (
        <PrayerTimeContext.Provider
          value={{
            prayers,
            current,
            next,
            setPrayerTime: this.setPrayerTime,
            getNearestPrayer: this.getNearestPrayer,
            getPrayerData: this.getPrayerData,
          }}
        >
          <Component />
        </PrayerTimeContext.Provider>
      )
    }
  }
}

export default withPrayerTime