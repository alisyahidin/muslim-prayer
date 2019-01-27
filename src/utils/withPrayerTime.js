import React from 'react'

import Timing from '../contexts/Timing'
import PrayerTime from '../contexts/PrayerTime'

const withPrayerTime = Component => {
  return class extends React.Component {
    static contextType = Timing

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

    getPrayerNow = () => {
      // filter state prayers id by timing.curent
      const { current } = this.context
      const { prayers } = this.state

      const now = prayers.filter(prayer => prayer.id === current)

      return now.length > 0 ? now[0] : {
        'id': 'shubuh',
        'name': 'Shubuh',
        'time': '05:03'
      }
    }

    componentDidMount() {
      // get prayers from DB
    }

    render() {
      const { prayers } = this.state

      return (
        <PrayerTime.Provider
          value={{
            prayers,
            getPrayerNow: this.getPrayerNow,
          }}
        >
          <Component />
        </PrayerTime.Provider>
      )
    }
  }
}

export default withPrayerTime