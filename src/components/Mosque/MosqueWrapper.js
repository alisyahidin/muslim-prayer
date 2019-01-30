import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const MosqueWrapper = posed.div({
  normal: {
    width: '70%',
    bottom: 0,
    right: 45,
    transition: {
      ease: easing,
      duration: 900,
    }
  },
  chibi: {
    width: '40%',
    bottom: -0.5,
    right: 30,
    transition: {
      ease: easing,
      duration: 900,
    }
  },
})

export default MosqueWrapper