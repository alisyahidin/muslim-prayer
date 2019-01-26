import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import Box from '../../components/Box/'
import PrayerBox from '../../components/PrayerBox/'

import styles from './styles'

const dates = [...Array(31).keys()];

class Prayers extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.prayers}>
        <div className={classes.header}>
          <ListSubheader component="div">Prayer Time</ListSubheader>
          <IconButton className={classes.icon}>
            <MoreHorizIcon />
          </IconButton>
        </div>
        <Box className={classes.prayerBoxes}>
          <div className={classes.innerPrayerBoxes}>
            {dates.map(date => <PrayerBox key={date} date={date} />)}
          </div>
        </Box>
      </div>
    )
  }
}

Prayers.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Prayers)