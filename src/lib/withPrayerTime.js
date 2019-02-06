import React from 'react'
import moment from 'moment'

import PrayerTime from '../contexts/PrayerTime'

const withPrayerTime = Component => {
  return class extends React.Component {
    state = {
      current: null,
      next: null,
      prayers: [
        {
          'id': 'shubuh',
          'name': 'Shubuh',
          'time': '04:13'
        },
        {
          'id': 'dzuhur',
          'name': 'Dzuhur',
          'time': '12:44'
        },
        {
          'id': 'ashar',
          'name': 'Ashar',
          'time': '15:00'
        },
        {
          'id': 'maghrib',
          'name': 'Maghrib',
          'time': '18:05'
        },
        {
          'id': 'isya',
          'name': 'Isya',
          'time': '19:07'
        },
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

    render() {
      const { prayers, current, next } = this.state

      return (
        <PrayerTime.Provider
          value={{
            prayers,
            current,
            next,
            getNearestPrayer: this.getNearestPrayer,
            getPrayerData: this.getPrayerData,
          }}
        >
          <Component />
        </PrayerTime.Provider>
      )
    }
  }
}

export default withPrayerTime