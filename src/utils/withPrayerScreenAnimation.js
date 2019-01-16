import React from 'react'

import PrayerScreenAnimation from '../contexts/PrayerScreenAnimation'

const withPrayerScreenAnimation = Component => {
  return class extends React.Component {
    state = {
      navbar: -48,
      height: '100%',
    }

    onWheel = e => {
      const wheel = Math.round(e.deltaY)

      this.setState({
        navbar: wheel < 20 ? -48 : 0,
        height: wheel > 20 ? '35%' : '100%',
      })
    }

    render() {
      const { navbar , height } = this.state

      return (
        <PrayerScreenAnimation.Provider
          value={{
            navbar: navbar,
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