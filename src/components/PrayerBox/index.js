import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import ButtonBase from '@material-ui/core/ButtonBase'

import styles from './styles'

const prayerBox = ({children, classes, date}) => (
  <ButtonBase className={classes.prayerBox}>
    <Badge color="secondary" badgeContent={2} classes={{ colorSecondary: classes.month }}>
      <span className={classes.date}>{date+1}</span>
    </Badge>
  </ButtonBase>
)

prayerBox.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(prayerBox)