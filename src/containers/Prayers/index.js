import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import Card from '../../components/Card/'
import DateCard from '../../components/DateCard/'
import Menu from '../../components/Menu/'
import PrayerInfo from '../../components/PrayerInfo/'

import styles from './styles'

const dates = [...Array(28).keys()];

class Prayers extends Component {
  state = {
    anchorEl: null,
    open: false,
    date: '',
    prayers: []
  }

  getPrayerByDate = date => {
    // fetch to storage and save to state
    return [
      {
        'id': 'shubuh',
        'name': 'Shubuh',
        'time': '04:13'
      },
      {
        'id': 'dzuhur',
        'name': 'Dzuhur',
        'time': '12:44'
      },
      {
        'id': 'ashar',
        'name': 'Ashar',
        'time': '15:00'
      },
      {
        'id': 'maghrib',
        'name': 'Maghrib',
        'time': '18:05'
      },
      {
        'id': 'isya',
        'name': 'Isya',
        'time': '19:07'
      }
    ]
  }

  handleClick = date => () => {
    this.setState({
      date,
      prayers: this.getPrayerByDate(date),
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      date: '',
      prayers: [],
      open: false,
    })
  }

  openMenu = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  closeMenu = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { anchorEl, open, prayers, date } = this.state
    const { classes } = this.props

    return (
      <div className={classes.prayers}>
        <div className={classes.header}>
          <ListSubheader component="div">Prayer Time</ListSubheader>
          <IconButton
            aria-owns={Boolean(anchorEl) ? 'menu-update' : undefined}
            aria-haspopup="true"
            onClick={this.openMenu}
            className={classes.icon}
          >
            <MoreHorizIcon />
          </IconButton>
        </div>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          closeMenu={this.closeMenu}
        />
        <Card className={classes.dates}>
          <div className={classes.innerDates}>
            {dates.map(date => <DateCard key={date} date={date} onClick={this.handleClick(date)} />)}
          </div>
        </Card>
        <PrayerInfo
          date={`${date+1} February 2019`}
          open={open}
          prayers={prayers}
          handleClose={this.handleClose}
        />
      </div>
    )
  }
}

Prayers.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Prayers)