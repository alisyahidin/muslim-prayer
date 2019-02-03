import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const Remaining = posed.p({
  center: {
    opacity: 1,
    paddingLeft: 0,
    width: '100%',
    transition: {
      ease: easing,
      duration: 800,
    }
  },
  left: {
    opacity: 0,
    paddingLeft: 20,
    width: '0%',
    transition: {
      ease: easing,
      duration: 800,
    }
  }
})

export default Remaining