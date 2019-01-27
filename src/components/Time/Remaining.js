import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const Remaining = posed.p({
  center: {
    paddingLeft: 0,
    width: '100%',
    transition: {
      ease: easing,
      duration: 800,
    }
  },
  left: {
    paddingLeft: 20,
    width: '0%',
    transition: {
      ease: easing,
      duration: 800,
    }
  }
})

export default Remaining