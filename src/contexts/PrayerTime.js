import { createContext } from 'react'

const defaultContext = {
  prayers: [],
  current: undefined,
  next: undefined,
  setPrayerTime: () => {
    console.log('from default setPrayerTime PrayerTime.js')
  },
  getNearestPrayer: () => {
    console.log('from default getNearestPrayer PrayerTime.js')
  },
  getPrayerData: () => {
    console.log('from default getPrayerData PrayerTime.js')
  }
}

const PrayerTime = createContext(defaultContext)

export default PrayerTime