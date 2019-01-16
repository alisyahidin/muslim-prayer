import { createContext } from 'react'

const defaultContext = {
  navbar: undefined,
  height: undefined,
  updateByWheel: () => {
    console.log('from default PrayerScreenAnimation.js')
  }
}

const PrayerScreenAnimation = createContext(defaultContext)

export default PrayerScreenAnimation