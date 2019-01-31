import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const Card = posed.div({
  small: {
    width: '7%',
    height: '7%',
    transition: {
      duration: 300,
      ease: easing
    }
  },
  grow: {
    width: '230px',
    height: '230px',
    transition: {
      duration: 300,
      ease: easing
    }
  },
})

export default Card