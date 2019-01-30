import React from 'react'

import Setup from '../contexts/Setup'

const withSetup = Component => {
  return class extends React.Component {
    state = {
      installed: false,
    }

    updateSetup = installed => {
      this.setState({
        installed
      })
    }

    render() {
      const { installed } = this.state

      return (
        <Setup.Provider
          value={{
            installed,
            updateSetup: this.updateSetup,
          }}
        >
          <Component />
        </Setup.Provider>
      )
    }
  }
}

export default withSetup