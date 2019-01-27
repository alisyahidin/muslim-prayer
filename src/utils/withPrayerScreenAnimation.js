import React from 'react'

import PrayerScreenAnimation from '../contexts/PrayerScreenAnimation'
import Timing from '../contexts/Timing'

const withPrayerScreenAnimation = Component => {
  return class extends React.Component {
    static contextType = Timing

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

    shouldComponentUpdate(nextProps, nextState) {
      const { updateTiming, clearTiming } = this.context

      if (nextState.scrolled === false && this.state.scrolled === true) {
        clearTiming()
        updateTiming('shubuh')
        clearTiming()
      }

      return true
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