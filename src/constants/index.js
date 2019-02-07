import sky from './sky'
import skyObjects from './skyObjects'

// Layout Constants
const ratio = Math.round(window.innerHeight/window.innerWidth)
const landscape = Math.round(window.innerHeight / (18.5 / 9))
const portrait = '100%'

const smallScreen = window.innerHeight <= 510
const navbarHeight = smallScreen ? 32 : 48
const maxWidth = ratio > 1 ? portrait : landscape

const prayerTime = [
  {
    'id': 'shubuh',
    'name': 'Shubuh',
    'time': '04:13'
  },
  {
    'id': 'dzuhur',
    'name': 'Dzuhur',
    'time': '11:58'
  },
  {
    'id': 'ashar',
    'name': 'Ashar',
    'time': '15:00'
  },
  {
    'id': 'maghrib',
    'name': 'Maghrib',
    'time': '18:05'
  },
  {
    'id': 'isya',
    'name': 'Isya',
    'time': '19:07'
  }
]

export {
  smallScreen,
  navbarHeight,
  maxWidth,

  sky,
  skyObjects,

  prayerTime
}