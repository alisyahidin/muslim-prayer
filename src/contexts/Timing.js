import { createContext } from 'react'

const defaultContext = {
  timing: undefined,
  reminder: undefined,
  prayerObserver: () => {
    console.log('from default prayerObserver Timing.js')
  },
  notificationObserver: () => {
    console.log('from default notificationObserver Timing.js')
  },
  getPrayer: () => {
    console.log('from default getPrayer Timing.js')
  },
  updateTiming: prayer => {
    console.log('from default updateTiming Timing.js')
  }
}

const Timing = createContext(defaultContext)

export default Timing