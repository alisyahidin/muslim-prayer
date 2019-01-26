import posed from 'react-pose'
import { navbarHeight } from '../../constants/'

const Bar = posed.div({
  hide: {
    bottom: -(navbarHeight),
    transition: {
      delay: 100,
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