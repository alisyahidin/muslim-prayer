import posed from 'react-pose'
import PropTypes from 'prop-types'

const easing = [.10, .60, .40, 1]

const Cloud = posed.img({
  normal: {
    width: ({size}) => `${(23*size)/100}%`,
    bottom: ({bottom}) => `${bottom}%`,
    right: ({right}) => `${right}%`,
    transition: ({i}) => ({
      ease: easing,
      duration: 800 + i*150,
    })
  },
  chibi: {
    bottom: ({bottom}) => `${bottom*1.4}%`,
    right: ({right}) => `${right-(right*0.35)}%`,
    width: ({size}) => `${(13*size)/100}%`,
    transition: ({i}) => ({
      ease: easing,
      duration: 1200 - i*150,
    })
  }
})

Cloud.propTypes = {
  size: PropTypes.number.isRequired,
  bottom: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
}

export default Cloud