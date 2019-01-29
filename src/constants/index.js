import sky from './sky'
import skyObjects from './skyObjects'

// Layout Constants
const ratio = Math.round(window.innerHeight/window.innerWidth)
const landscape = Math.round(window.innerHeight / (18.5 / 9))
const portrait = '100%'

const smallScreen = window.innerHeight <= 510
const navbarHeight = smallScreen ? 32 : 48
const maxWidth = ratio > 1 ? portrait : landscape

export {
  smallScreen,
  navbarHeight,
  maxWidth,

  sky,
  skyObjects
}