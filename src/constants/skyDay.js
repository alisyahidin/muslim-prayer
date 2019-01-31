import { betweenHours } from '../utils/time'

const day = () => {
  let objects = {
    day: {
      bottom: '#C7EEFF',
      middle: '#7ED2F6',
      top: '#3EB8ED'
    }
  }

  if (betweenHours('06:30', '7:40') || betweenHours('16:00', '17:00')) {
    objects = {
      bottom: '#00B4DB',
      middle: '#00B4DB',
      top: '#0083B0'
    }
  }

  if (betweenHours('7:40', '10:00') || betweenHours('13:00', '16:00')) {
    objects = {
      bottom: '#C7EEFF',
      middle: '#7ED2F6',
      top: '#3EB8ED'
    }
  }

  if (betweenHours('10:00', '11:30') || betweenHours('12:30', '14:00')) {
    objects = {
      bottom: '#C7EEFF',
      middle: '#7ED2F6',
      top: '#3EB8ED'
    }
  }

  return objects
}

export default day()