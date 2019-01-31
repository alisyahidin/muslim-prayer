import React from 'react'
import moment from 'moment'

import PrayerTime from '../contexts/PrayerTime'

const withPrayerTime = Component => {
  return class extends React.Component {
    state = {
      prayers: [
        {
          'id': 'shubuh',
          'name': 'Shubuh',
          'time': '04:13'
        },
        {
          'id': 'dzuhur',
          'name': 'Dzuhur',
          'time': '12:03'
        },
        {
          'id': 'ashar',
          'name': 'Ashar',
          'time': '15:09'
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
      // filter state prayers id by timing.curent
      const { prayers } = this.state
      const count = prayers.filter(prayerState => prayerState.id === prayer)

      return count.length > 0 ? count.shift() : null
    }

    getCurrentPrayer = () => {
      const { prayers } = this.state
      const count = prayers.filter(prayer => moment().isAfter(moment(prayer.time, 'HH:mm')))

      return count.length > 0 ? count.pop() : null
    }

    getNextPrayer = () => {
      const { prayers } = this.state
      const count = prayers.filter(prayer => moment().isBefore(moment(prayer.time, 'HH:mm')))

      return count.length > 0 ? count.shift() : null
    }

    render() {
      const { prayers } = this.state

      return (
        <PrayerTime.Provider
          value={{
            prayers,
            current: this.getCurrentPrayer(),
            next: this.getNextPrayer(),
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