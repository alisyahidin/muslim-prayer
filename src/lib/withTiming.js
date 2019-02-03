import React from 'react'
import moment, { duration } from 'moment'
import { interval, of, empty, merge } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import Moment from 'react-moment'

import PrayerTime from '../contexts/PrayerTime'
import Timing from '../contexts/Timing'

import { betweenHours } from '../utils/time'

const ONE_HOURS = 1000*60*60
const FIVE_MINUTES = 1000*60*5

const withTiming = Component => {
  return class extends React.Component {
    static contextType = PrayerTime

    state = {
      init: true,
      timing: 'day',
      reminder: '',
    }

    finishInitializing = () => {
      this.setState({
        init: false
      })
    }

    updateTiming = (prayer) => {
      const timing = typeof prayer !== 'undefined'
        ? prayer
        : this.dayOrNight()

      this.setState(prevState => ({
        timing
      }))
    }

    dayOrNight = () => {
      return betweenHours('05:00', '18:30') ? 'day' : 'night'
    }

    getPrayer = () => {
      const { getPrayerData } = this.context
      const { timing } = this.state
      const result = getPrayerData(timing) !== null
        ? getPrayerData(timing)
        : { name: moment().format('D MMM YYYY'), time: <Moment interval={1000} format='HH:mm' /> }

      return result
    }

    watchTime = () => {
      const { current, next } = this.context

      const nextObservable = next !== null
        ? of(moment(next.time, 'HH:mm').diff(moment()))
          .pipe(
            filter(milliseconds => {
              const countDown = next.id === 'isya' ? ONE_HOURS * 1/3 : ONE_HOURS
              return milliseconds <= countDown && milliseconds > 0
            }),
            map(time => `${next.name} ${duration(time).humanize(true)}`)
          )
        : empty()

      const currentObservable = current !== null
        ? of(moment(current.time, 'HH:mm').diff(moment()))
          .pipe(
            filter(milliseconds => milliseconds < 0 && milliseconds > -ONE_HOURS),
            map(time => {
              if (time <= -ONE_HOURS + 2000) return ''
              return time > -FIVE_MINUTES
                ? `Time to pray ${current.name}`
                : `${current.name} ${duration(time).humanize(true)}`
            })
          )
        : empty()

      const prayerObservable = merge(currentObservable, nextObservable)

      prayerObservable.subscribe(reminder => {
        console.log(reminder)
        this.setState({reminder})
      })
    }

    componentDidMount() {
      interval(1000)
        .subscribe(() => this.watchTime())
    }

    render() {
      const { timing, init, reminder } = this.state

      return (
        <Timing.Provider
          value={{
            timing,
            init,
            reminder,
            finishInitializing: this.finishInitializing,
            updateTiming: this.updateTiming,
            getPrayer: this.getPrayer,
          }}
        >
          <Component />
        </Timing.Provider>
      )
    }
  }
}

export default withTiming