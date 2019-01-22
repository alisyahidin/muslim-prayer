import posed from 'react-pose'

const Bar = posed.div({
  hide: {
    bottom: -48,
    transition: {
      delay: 200,
      duration: 500,
    }
  },
  show: {
    bottom: 0,
    transition: {
      duration: 500,
    }
  }
})

export default Bar