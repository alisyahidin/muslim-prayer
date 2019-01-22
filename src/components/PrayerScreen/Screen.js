import posed from 'react-pose';

const easing = [.10, .60, .40, 1]

const Screen = posed.div({
  minimize: {
    height: '40%',
    transition: {
      ease: easing,
      duration: 800,
    }
  },
  maximize: {
    height: '100%',
    transition: {
      ease: easing,
      duration: 800,
    }
  }
})

export default Screen