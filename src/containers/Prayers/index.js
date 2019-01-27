import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import Card from '../../components/Card/'
import DateCard from '../../components/DateCard/'

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
        <Card className={classes.dates}>
          <div className={classes.innerdates}>
            {dates.map(date => <DateCard key={date} date={date} />)}
          </div>
        </Card>
      </div>
    )
  }
}

Prayers.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Prayers)