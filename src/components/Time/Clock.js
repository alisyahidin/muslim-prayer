import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const Clock = posed.h3({
  center: {
    paddingLeft: 0,
    transform: 'scale(1.3)',
    width: '100%',
    transition: {
      ease: easing,
      duration: 800,
    }
  },
  left: {
    paddingLeft: 20,
    transform: 'scale(1)',
    width: '0%',
    transition: {
      ease: easing,
      duration: 800,
    }
  }
})

export default Clock