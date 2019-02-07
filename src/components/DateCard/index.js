import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'

import styles from './styles'

const DateCard = ({children, onClick, classes, date}) => (
  <ButtonBase onClick={onClick} className={classes.dateCard}>
    <span className={classes.month}>feb</span>
    <span className={classes.date}>{date}</span>
  </ButtonBase>
)

DateCard.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default withStyles(styles)(DateCard)