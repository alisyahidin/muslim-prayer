import cloud1 from '../assets/clouds/1.svg'
import cloud2 from '../assets/clouds/2.svg'
import cloud3 from '../assets/clouds/3.svg'
import cloud4 from '../assets/clouds/4.svg'
import cloud5 from '../assets/clouds/5.svg'

// Layout Constants
const ratio = Math.round(window.innerHeight/window.innerWidth)
const landscape = Math.round(window.innerHeight / (18.5 / 9))
const portrait = '100%'

export const smallScreen = window.innerHeight <= 510
export const navbarHeight = smallScreen ? 32 : 48
export const maxWidth = ratio > 1 ? portrait : landscape

// Cloud Components
export const clouds = [
  {
    size: 90,
    bottom: 28,
    right: 57,
    src: cloud2
  },
  {
    size: 100,
    bottom: 35,
    right: 11,
    src: cloud1
  },
  {
    size: 75,
    bottom: 42,
    right: 47,
    src: cloud3
  },
  {
    size: 80,
    bottom: 54,
    right: 38,
    src: cloud4
  },
  {
    size: 90,
    bottom: 47,
    right: 17,
    src: cloud5
  },
]