import { createContext } from 'react'

const defaultContext = {
  timing: undefined,
  updateTiming: prayer => {
    console.log('from default updateTiming Timing.js')
  }
}

const Timing = createContext(defaultContext)

export default Timing