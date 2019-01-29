import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const Stop = posed.stop({
  color: {
    stopColor: ({color}) => color,
    transition: {
      ease: easing,
      duration: 1400,
    }
  }
})

export default Stop