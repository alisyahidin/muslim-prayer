import posed from 'react-pose'
import PropTypes from 'prop-types'

const easing = [.10, .60, .40, 1]

const Cloud = posed.img({
  normal: {
    width: '23%',
    bottom: ({bottom}) => `${bottom}%`,
    right: ({right}) => `${right}%`,
    transition: {
      ease: easing,
      duration: 800,
    }
  },
  chibi: {
    bottom: ({bottom}) => `${bottom*1.4}%`,
    right: ({right}) => `${right-(right*0.35)}%`,
    width: '13%',
    transition: {
      ease: easing,
      duration: 800,
    }
  }
})

Cloud.propTypes = {
  bottom: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
}

export default Cloud