// Layout Constants
const ratio = Math.round(window.innerHeight/window.innerWidth)
const landscape = Math.round(window.innerHeight / (18.5 / 9))
const portrait = '100%'

export const smallScreen = window.innerHeight <= 510
export const navbarHeight = smallScreen ? 32 : 48
export const maxWidth = ratio > 1 ? portrait : landscape