import { createContext } from 'react'

const defaultContext = {
  installed: undefined,
  updateSetup: installed => {
    console.log('from default updateSetup Setup.js')
  }
}

const Setup = createContext(defaultContext)

export default Setup