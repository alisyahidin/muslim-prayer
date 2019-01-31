import day from './skyDay'
import night from './skyNight'

const prayerSky = {
  dzuhur: {
    bottom: '#C7EEFF',
    middle: '#7ED2F6',
    top: '#3EB8ED'
  },
  ashar: {
    bottom: '#9DE7FF',
    middle: '#66C3E8',
    top: '#35A3D4'
  },
  maghrib: {
    bottom: '#E9ED33',
    middle: '#EA3C7B',
    top: '#6462C4'
  },
  isya: {
    bottom: '#12132E',
    middle: '#233763',
    top: '#345D9A'
  },
  shubuh: {
    bottom: '#721F3D',
    middle: '#461B59',
    top: '#1A1876'
  }
}

const sky = Object.assign(prayerSky, { day, night })

export default sky