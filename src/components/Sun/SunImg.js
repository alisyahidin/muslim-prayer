import posed from 'react-pose'
import PropTypes from 'prop-types'

const easing = [.10, .60, .40, 1]

const SunImg = posed.img({
  normal: {
    width: '30%',
    bottom: ({bottom}) => `${bottom}%`,
    right: ({right}) => `${right}%`,
    transition: {
      ease: easing,
      duration: 950,
    }
  },
  chibi: {
    bottom: ({bottom}) => `${bottom*1.4}%`,
    right: ({right}) => `${right-(right*0.35)}%`,
    width: '18%',
    transition: {
      ease: easing,
      duration: 950,
    }
  }
})

SunImg.propTypes = {
  bottom: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
}

export default SunImg