import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import ButtonBase from '@material-ui/core/ButtonBase'

import styles from './styles'

const prayerBox = ({children, classes, date}) => (
  <ButtonBase className={classes.prayerBox}>
    <span className={classes.month}>feb</span>
    <span className={classes.date}>{date+1}</span>
  </ButtonBase>
)

prayerBox.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(prayerBox)