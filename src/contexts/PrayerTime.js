import { createContext } from 'react'

const defaultContext = {
  prayers: [],
  prayer: [],
  current: undefined,
  next: undefined,
  setPrayerTime: () => {
    console.log('from default setPrayerTime PrayerTime.js')
  },
  updatePrayerTimes: () => {
    console.log('from default updatePrayerTimes PrayerTime.js')
  },
  deletePrayerTimes: () => {
    console.log('from default deletePrayerTimes PrayerTime.js')
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