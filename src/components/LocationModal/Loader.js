import posed from 'react-pose'
import { easing } from 'popmotion'

const Card = posed.div({
  small: {
    opacity: 1,
    zIndex: 5,
    visibility: 'visible',
    transition: {
      duration: 300,
      ease: easing.circOut
    }
  },
  grow: {
    opacity: 0,
    zIndex: -5,
    visibility: 'hidden',
    transition: {
      duration: 300,
      ease: easing.circOut
    }
  },
})

export default Card