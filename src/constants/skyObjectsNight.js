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

const objectsInNight = (bottom, sunResource = sun) => (
  [
    {
      ...sun,
      bottom: -20,
    },
    {
      size: 100,
      bottom: 35,
      right: 60,
      src: moon
    },
    {
      size: 90,
      bottom: 28,
      right: 57,
      src: cloud2,
      opacity: 0,
      zIndex: -2,
    },
    {
      size: 100,
      bottom: 35,
      right: 11,
      src: cloud1,
      opacity: 0,
      zIndex: -2,
    },
    {
      size: 75,
      bottom: 42,
      right: 47,
      src: cloud3,
      opacity: 0,
      zIndex: -2,
    },
    {
      size: 80,
      bottom: 54,
      right: 38,
      src: cloud4,
      opacity: 0,
      zIndex: -2,
    },
    {
      size: 90,
      bottom: 47,
      right: 17,
      src: cloud5,
      opacity: 0,
      zIndex: -2,
    },
    {
      size: 50,
      bottom: 47,
      right: rand(10, 45),
      src: star1,
    },
    {
      size: 50,
      bottom: 40,
      right: rand(10, 45),
      src: star2,
    },
    {
      size: 50,
      bottom: 60,
      right: rand(10, 45),
      src: star3,
    },
  ]
)

const night = () => {
  return objectsInNight(23)
}

export default night()