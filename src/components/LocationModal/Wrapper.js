import posed from 'react-pose'
import { easing } from 'popmotion'

const Card = posed.div({
  small: {
    opacity: 0,
    transform: 'scaleY(0)',
    transition: {
      opacity: {
        delay: 800,
        duration: 600,
        ease: easing.circOut
      },
      duration: 300,
      ease: easing.circOut
    }
  },
  grow: {
    opacity: 1,
    transform: 'scaleY(1)',
    transition: {
      opacity: {
        delay: 800,
        duration: 600,
        ease: easing.circOut
      },
      duration: 300,
      ease: easing.circOut
    }
  },
})

export default Card