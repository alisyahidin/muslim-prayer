import { createContext } from 'react'

const defaultContext = {
  timing: undefined,
  init: undefined,
  reminder: undefined,
  getPrayer: () => {
    console.log('from default getPrayer Timing.js')
  },
  finishInitializing: () => {
    console.log('from default finishInitializing Timing.js')
  },
  updateTiming: prayer => {
    console.log('from default updateTiming Timing.js')
  }
}

const Timing = createContext(defaultContext)

export default Timing