import { createContext } from 'react'

const defaultContext = {
  prayer: {
    current: undefined,
    next: undefined,
  },
  updatePrayer: prayer => {
    console.log('from default updatePrayer PrayerTime.js')
  },
  clearNext: () => {
    console.log('from default clearNext PrayerTime.js')
  }
}

const PrayerTime = createContext(defaultContext)

export default PrayerTime