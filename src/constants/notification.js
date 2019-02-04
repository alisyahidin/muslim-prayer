import icon from '../assets/icon/icon.png'
import badge from '../assets/icon/badge.png'

const options = {
  body: 'Prayer time has coming!',
  icon: icon,
  badge: badge,
  vibrate: [1000, 1000, 1000, 1000],
  data: {
    prayer: 'dzuhur'
  }
}

export default options