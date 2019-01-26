import React from 'react'

import PrayerScreenAnimation from '../contexts/PrayerScreenAnimation'
import PrayerTime from '../contexts/PrayerTime'

const withPrayerScreenAnimation = Component => {
  return class extends React.Component {
    static contextType = PrayerTime

    state = {
      scrolled: false,
      initTouch: 0,
    }

    byWheel = e => {
      const { updatePrayer } = this.context
      const wheel = Math.round(e.deltaY)

      if (wheel < 0) updatePrayer('dzuhur')

      this.setState({
        scrolled: wheel > 0,
      })
    }

    handleInitTouch = e => {
      const initTouch = Math.round(e.targetTouches[0].clientY)

      this.setState({ initTouch })
    }

    byTouch = e => {
      const { updatePrayer } = this.context
      const { initTouch } = this.state
      let touched = Math.round(e.targetTouches[0].clientY)
      touched -= initTouch

      if (touched > 0) updatePrayer('dzuhur')

      this.setState({
        scrolled: touched < -120,
      })
    }

    render() {
      const { scrolled } = this.state

      return (
        <PrayerScreenAnimation.Provider
          value={{
            scrolled,
            updateByWheel: this.byWheel,
            updateByTouch: this.byTouch,
            setInitTouched: this.handleInitTouch,
          }}
        >
          <Component />
        </PrayerScreenAnimation.Provider>
      )
    }
  }
}

export default withPrayerScreenAnimation