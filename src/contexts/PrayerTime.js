import { createContext } from 'react'

const defaultContext = {
  timing: {
    current: undefined,
    next: undefined,
  },
  updateTiming: prayer => {
    console.log('from default updateTiming PrayerTime.js')
  },
  clearTiming: () => {
    console.log('from default clearTiming PrayerTime.js')
  }
}

const PrayerTime = createContext(defaultContext)

export default PrayerTime