import { createContext } from 'react'

const defaultContext = {
  prayers: [],
  current: undefined,
  next: undefined,
  getPrayerData: () => {
    console.log('from default getPrayerData PrayerTime.js')
  }
}

const PrayerTime = createContext(defaultContext)

export default PrayerTime