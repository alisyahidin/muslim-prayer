import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const Stop = posed.stop({
  current: {
    stopColor: ({current}) => current,
    transition: {
      ease: easing,
      duration: 800,
    }
  },
  next: {
    stopColor: ({next}) => next,
    transition: {
      ease: easing,
      duration: 800,
    }
  },
})

export default Stop