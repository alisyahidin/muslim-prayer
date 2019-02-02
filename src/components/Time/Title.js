import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const Title = posed.h6({
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
    paddingLeft: 21,
    transform: 'scale(1)',
    width: '0%',
    transition: {
      ease: easing,
      duration: 800,
    }
  }
})

export default Title