import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const Wrapper = posed.div({
  center: {
    paddingTop: window.innerHeight <= 480 ? '15%' : '23%',
    transition: {
      ease: easing,
      duration: 800,
    }
  },
  left: {
    paddingTop: '15%',
    transition: {
      ease: easing,
      duration: 800,
    }
  }
})

export default Wrapper