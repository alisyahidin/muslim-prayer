import { createContext } from 'react'

const defaultContext = {
  bottom: 0,
  height: '100%',
  updateByWheel: () => {
    console.log('from default PrayerScreenAnimation.js')
  }
}

const PrayerScreenAnimation = createContext(defaultContext)

export default PrayerScreenAnimation