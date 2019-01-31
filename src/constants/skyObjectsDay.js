import { betweenHours } from '../utils/time'

import cloud1 from '../assets/clouds/1.svg'
import cloud2 from '../assets/clouds/2.svg'
import cloud3 from '../assets/clouds/3.svg'
import cloud4 from '../assets/clouds/4.svg'
import cloud5 from '../assets/clouds/5.svg'
import star1 from '../assets/stars/1.svg'
import star2 from '../assets/stars/2.svg'
import star3 from '../assets/stars/3.svg'
import sunResource from '../assets/sun/sun.svg'
import moon from '../assets/moon/moon.svg'

const sun = {
  size: 130,
  right: 60,
  src: sunResource
}

const rand = (min, max) => {
  return Math.floor(Math.random() * max+1) + min
}

const objectsInDay = (bottom, sunResource = sun) => (
  [
    {
      ...sunResource,
      bottom: bottom,
    },
    {
      size: 100,
      bottom: 25,
      right: 60,
      src: moon,
      opacity: 0,
      zIndex: -2,
    },
    {
      size: 90,
      bottom: 28,
      right: rand(5, 45),
      src: cloud2
    },
    {
      size: 100,
      bottom: 35,
      right: rand(15, 45),
      src: cloud1
    },
    {
      size: 75,
      bottom: 42,
      right: rand(25, 45),
      src: cloud3
    },
    {
      size: 80,
      bottom: 54,
      right: rand(25, 45),
      src: cloud4
    },
    {
      size: 90,
      bottom: 47,
      right: rand(25, 45),
      src: cloud5
    },
    {
      size: 50,
      bottom: 37,
      right: 14,
      src: star1,
      opacity: 0,
      zIndex: -2,
    },
    {
      size: 50,
      bottom: 44,
      right: 37,
      src: star2,
      opacity: 0,
      zIndex: -2,
    },
    {
      size: 50,
      bottom: 45,
      right: 30,
      src: star3,
      opacity: 0,
      zIndex: -2,
    },
  ]
)

const day = () => {
  let objects = []

  if (betweenHours('06:30', '7:40')) {
    objects = objectsInDay(10)
  }

  if (betweenHours('16:00', '17:00')) {
    objects = objectsInDay(18)
  }

  if (betweenHours('7:40', '10:00') || betweenHours('14:00', '16:00')) {
    objects = objectsInDay(24)
  }

  if (betweenHours('10:00', '11:30') || betweenHours('12:30', '14:00')) {
    objects = objectsInDay(18)
  }

  return objects
}

export default day()