import React from 'react'

import NavigationHeight from '../utils/NavigationHeight'

const withNavigationHeight = Component => {
  return class extends React.Component {
    state = {
      bottom: -48,
    }

    onWheel = e => {
      const wheel = Math.round(e.deltaY)
      let bottom = 0

      if (wheel > 20) {
        bottom = 0
      } else if (wheel < 20) {
        bottom = -48
      }

      this.setState({
        bottom
      })
    }

    render() {
      return (
        <NavigationHeight.Provider
          value={{
            bottom: this.state.bottom,
            updateByWheel: this.onWheel
          }}
        >
          <Component />
        </NavigationHeight.Provider>
      )
    }
  }
}

export default withNavigationHeight