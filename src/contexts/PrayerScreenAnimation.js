import { createContext } from 'react'

const defaultContext = {
  scrolled: undefined,
  updateByWheel: () => {
    console.log('from default updateByWheel PrayerScreenAnimation.js')
  },
  setInitTouched: () => {
    console.log('from default setInitTouched PrayerScreenAnimation.js')
  },
  updateByTouch: () => {
    console.log('from default updateByTouch PrayerScreenAnimation.js')
  },
}

const PrayerScreenAnimation = createContext(defaultContext)

export default PrayerScreenAnimation