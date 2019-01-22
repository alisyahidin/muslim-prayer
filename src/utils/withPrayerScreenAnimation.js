import React from 'react'

import PrayerScreenAnimation from '../contexts/PrayerScreenAnimation'

const withPrayerScreenAnimation = Component => {
  return class extends React.Component {
    state = {
      scrolled: false,
      initTouch: 0,
    }

    byWheel = e => {
      const wheel = Math.round(e.deltaY)

      this.setState({
        scrolled: wheel > 0,
      })
    }

    handleInitTouch = e => {
      const initTouch = Math.round(e.targetTouches[0].clientY)

      this.setState({ initTouch })
    }

    byTouch = e => {
      const { initTouch } = this.state
      let touched = Math.round(e.targetTouches[0].clientY)
      touched -= initTouch

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