import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import styles from './styles'

const EmptyState = ({classes, action, img, message, handleClick}) => (
  <div className={classes.emptyState}>
    <div className={classes.illustration}>
      <img src={img} className={classes.icon} alt="Empty State"/>
      <p>{message}</p>
    </div>
    {(action && handleClick) && (
      <Button
        classes={{
          root: classes.buttonRoot,
          label: classes.buttonLabel
        }}
        onClick={handleClick}
        variant="contained"
        size="small"
        color="primary"
      >
        {action}
      </Button>
    )}
  </div>
)

EmptyState.propTypes = {
  classes: PropTypes.any.isRequired,
  handleClick: PropTypes.func,
  message: PropTypes.string,
  action: PropTypes.any,
}

export default withStyles(styles)(EmptyState)