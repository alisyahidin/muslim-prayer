import { createContext } from 'react'

const defaultContext = {
  bottom: 0,
  updateByWheel: () => {
    console.log('from default NavigationHeight.js')
  }
}

const NavigationHeight = createContext(defaultContext)

export default NavigationHeight