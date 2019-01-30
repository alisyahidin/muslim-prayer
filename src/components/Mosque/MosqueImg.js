import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const MosqueImg = posed.img({
  hide: {
    opacity: 0,
    transition: {
      ease: easing,
      duration: 900,
    }
  },
  show: {
    opacity: 1,
    transition: {
      ease: easing,
      duration: 900,
    }
  }
})

export default MosqueImg