import React from 'react'

import PrayerScreenAnimation from '../utils/PrayerScreenAnimation'

const withPrayerScreenAnimation = Component => {
  return class extends React.Component {
    state = {
      bottom: -48,
      height: '100%',
    }

    onWheel = e => {
      const wheel = Math.round(e.deltaY)

      this.setState({
        bottom: wheel < 20 ? -48 : 0,
        height: wheel > 20 ? '35%' : '100%',
      })
    }

    render() {
      const { bottom , height } = this.state

      return (
        <PrayerScreenAnimation.Provider
          value={{
            bottom: bottom,
            height: height,
            updateByWheel: this.onWheel
          }}
        >
          <Component />
        </PrayerScreenAnimation.Provider>
      )
    }
  }
}

export default withPrayerScreenAnimation