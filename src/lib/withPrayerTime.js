import React from 'react'

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

    getPrayerNow = prayer => {
      // filter state prayers id by timing.curent
      const { prayers } = this.state

      const now = prayers.filter(prayerState => prayerState.id === prayer)

      return now.length > 0 ? now[0] : {
        'id': 'day',
        'name': '',
        'time': ''
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