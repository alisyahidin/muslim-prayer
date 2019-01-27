import { createContext } from 'react'

const defaultContext = {
  current: undefined,
  next: undefined,
  updateTiming: prayer => {
    console.log('from default updateTiming Timing.js')
  },
  clearTiming: () => {
    console.log('from default clearTiming Timing.js')
  }
}

const Timing = createContext(defaultContext)

export default Timing