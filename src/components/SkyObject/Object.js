import posed from 'react-pose'
import PropTypes from 'prop-types'

const easing = [.10, .60, .40, 1]

const Obj = posed.img({
  normal: {
    opacity: ({opacity}) => opacity,
    width: ({size}) => `${(23*size)/100}%`,
    bottom: ({bottom}) => `${bottom}%`,
    right: ({right}) => `${right}%`,
    transition: ({i}) => ({
      ease: easing,
      duration: 1500 + i*150,
    })
  },
  chibi: {
    opacity: ({opacity}) => opacity,
    width: ({size}) => `${(13*size)/100}%`,
    bottom: ({bottom}) => `${bottom*1.4}%`,
    right: ({right}) => `${right-(right*0.35)}%`,
    transition: ({i}) => ({
      ease: easing,
      duration: 1500 - i*150,
    })
  }
})

Obj.defaultProps = {
  opacity: 1,
  size: 100,
}

Obj.propTypes = {
  size: PropTypes.number.isRequired,
  bottom: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
}

export default Obj