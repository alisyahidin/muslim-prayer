import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

const Box = ({children, classes}) => (
  <div className={classes.box}>
    {children}
  </div>
)

Box.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Box)