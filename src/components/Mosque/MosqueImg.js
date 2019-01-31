import posed from 'react-pose'
import { spring } from 'popmotion'

const easing = [.10, .60, .40, 1]

const MosqueImg = posed.img({
  draggable: 'x',
  dragEnd: {
    transition: spring
  },
  hide: {
    opacity: 0,
    zIndex: -1,
    transition: {
      ease: easing,
      duration: 900,
    }
  },
  show: {
    opacity: 1,
    zIndex: 1,
    transition: {
      ease: easing,
      duration: 900,
    }
  }
})

export default MosqueImg