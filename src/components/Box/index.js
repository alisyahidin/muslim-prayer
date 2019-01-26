import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

const Box = ({children, classes, className}) => (
  <div className={classNames(classes.box, className)}>
    {children}
  </div>
)

Box.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Box)