import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

const Card = ({children, classes, className}) => (
  <div className={classNames(classes.card, className)}>
    {children}
  </div>
)

Card.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Card)