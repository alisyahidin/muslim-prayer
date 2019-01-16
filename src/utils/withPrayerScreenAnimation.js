import React from 'react'

import PrayerScreenAnimation from '../contexts/PrayerScreenAnimation'

const withPrayerScreenAnimation = Component => {
  return class extends React.Component {
    state = {
      navbar: -48,
      height: '100%',
      initTouch: 0,
    }

    byWheel = e => {
      const wheel = Math.round(e.deltaY)

      this.setState({
        navbar: wheel < 20 ? -48 : 0,
        height: wheel > 20 ? '35%' : '100%',
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
        navbar: touched < -100 ? 0 : -48,
        height: touched < -100 ? '35%' : '100%',
      })
    }

    render() {
      const { navbar , height } = this.state

      return (
        <PrayerScreenAnimation.Provider
          value={{
            navbar,
            height,
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