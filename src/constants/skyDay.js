import { betweenHours } from '../utils/time'

const day = prayerSky => {
  let day = {
    bottom: '#2486ff',
    middle: '#42b6ff',
    top: '#99daff'
  }

  if (betweenHours('04:00', '05:00')) {
    day = prayerSky.shubuh
  }
  if (betweenHours('05:00', '07:30')) {
    day = {
      top: '#0a77cc',
      middle: '#1fa9ff',
      bottom: '#99daff'
    }
  }
  if (betweenHours('11:00', '13:00')) {
    day = prayerSky.dzuhur
  }
  if (betweenHours('14:30', '15:30')) {
    day = prayerSky.ashar
  }
  if (betweenHours('17:30', '18:20')) {
    day = prayerSky.maghrib
  }
  if (betweenHours('18:20', '18:30')) {
    day = {
      bottom: '#1e325b',
      middle: '#3b5a9b',
      top: '#4060a5'
    }
  }

  return day
}

export default day