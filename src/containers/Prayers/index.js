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
import PrayerTime from '../../contexts/PrayerTime'
import EmptyState from '../../components/EmptyState/'

import empty from '../../assets/empty-state/calendar.png'
import styles from './styles'

class Prayers extends Component {
  static contextType = PrayerTime

  state = {
    anchorEl: null,
    open: false,
    date: '',
  }

  getPrayerByDate = date => {
    // const { prayers } = this.context
    // prayers.filter(prayer.date === date)

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
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      date: '',
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
    const { anchorEl, open, date } = this.state
    const { classes } = this.props
    const { prayers } = this.context

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
            <MoreHorizIcon
              color="primary"
              classes={{
                colorPrimary: classes.menuIcon
              }}
            />
          </IconButton>
        </div>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          closeMenu={this.closeMenu}
        />
        <Card className={classes.dates}>
          <div className={classes.innerDates}>
            {prayers.length === 0 && (
              <EmptyState
                img={empty}
                message="There is no prayer time"
              />
            )}
            {prayers.length > 0 && prayers.map(date => (
              <DateCard key={date} date={date} onClick={this.handleClick(date)} />
            ))}
          </div>
        </Card>
        <PrayerInfo
          date={`${date} February 2019`}
          open={open}
          prayer={date ? this.getPrayerByDate(date) : []}
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