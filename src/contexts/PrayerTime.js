import { createContext } from 'react'

const defaultContext = {
  prayers: [],
  getPrayerNow: () => {
    console.log('from default getPrayerNow PrayerTime.js')
  }
}

const PrayerTime = createContext(defaultContext)

export default PrayerTime