import React from 'react'
import moment from 'moment'

import PrayerTimeContext from '../contexts/PrayerTime'
import { prayerTime } from '../constants/'

const withPrayerTime = Component => {
  return class extends React.Component {
    state = {
      current: null,
      next: null,
      prayer: [
      ],
      prayers: [
      ]
    }

    getPrayerData = prayerParam => {
      const { prayer } = this.state
      const count = prayer.filter(prayerState => prayerState.id === prayerParam)

      return count.length > 0 ? count.shift() : null
    }

    getNearestPrayer = () => {
      const { prayer } = this.state
      const current = prayer.filter(prayer => moment().isAfter(moment(prayer.time, 'HH:mm')))
      const next = prayer.filter(prayer => moment().isBefore(moment(prayer.time, 'HH:mm')))

      this.setState({
        current: current.length > 0 ? current.pop() : null,
        next: next.length > 0 ? next.shift() : null
      })
    }

    setPrayerTime = () => {
      // get prayers data depends date range

      // set state for today
      if (this.state.prayer.length === 0) {
        this.setState({
          prayer: prayerTime
        })
      }
    }

    render() {
      const { prayers, prayer, current, next } = this.state

      return (
        <PrayerTimeContext.Provider
          value={{
            prayers,
            prayer,
            current,
            next,
            setPrayerTime: this.setPrayerTime,
            updatePrayerTimes: this.updatePrayerTimes,
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