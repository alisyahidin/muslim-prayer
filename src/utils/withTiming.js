import React from 'react'

import Timing from '../contexts/Timing'

const withTiming = Component => {
  return class extends React.Component {
    state = {
      current: 'shubuh',
      next: undefined,
    }

    updateTiming = prayer => {
      clearTimeout(this.timeoutNext)

      this.setState(prevState => ({
        current: typeof prevState.next === 'undefined' ? prayer : prevState.next,
        next: prayer
      }))
    }

    clearTiming = () => {
      this.timeoutNext = setTimeout(() => {
        this.setState(prevState => ({
          current: prevState.next,
          next: undefined,
        }))
      }, 800)
    }

    componentWillUnmount() {
      clearTimeout(this.timeoutNext)
    }

    render() {
      const { current, next } = this.state

      return (
        <Timing.Provider
          value={{
            current,
            next,
            clearTiming: this.clearTiming,
            updateTiming: this.updateTiming,
          }}
        >
          <Component />
        </Timing.Provider>
      )
    }
  }
}

export default withTiming