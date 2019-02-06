import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import AlarmIcon from '@material-ui/icons/Alarm'

import Card from '../Card/'
import DatePicker from '../DatePicker/'
import PrayerTimeContext from '../../contexts/PrayerTime'
import Timing from '../../contexts/Timing'

import styles from './styles'

class PrayerList extends Component {
  static contextType = Timing
  state = {
    openDatePicker: false
  }

  updateTiming = prayer => () => {
    const { updateTiming } = this.context

    updateTiming(prayer)
  }

  toggleDatePicker = openDatePicker => () => {
    this.setState({
      openDatePicker,
    })
  }

  render() {
    const { classes } = this.props
    const { timing } = this.context
    const { openDatePicker } = this.state

    return (
      <PrayerTimeContext.Consumer>
        {({prayers}) => (
          <>
            <div className={classes.prayerList}>
              <Card className={classes.card}>
                {prayers.length === 0 && (
                  <div onClick={this.toggleDatePicker(true)} className={classes.emptyState}>
                    <p>Update prayer time</p>
                  </div>
                )}
                {prayers.length > 0 && (
                  <List className={classes.lists} component="ul">
                    {prayers.map((prayer, i) => (
                      <ListItem
                        selected={timing === prayer.id}
                        key={i}
                        onClick={this.updateTiming(prayer.id)}
                        className={classes.list}
                        classes={{
                          selected: classes.listSelected
                        }}
                        button
                      >
                        <ListItemText
                          classes={{
                            primary: classes.text
                          }}
                          primary={prayer.name}
                        />
                        <ListItemSecondaryAction>
                          <IconButton className={classes.icon}>
                            <AlarmIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Card>
            </div>

            <DatePicker
              type="update"
              open={openDatePicker}
              handleClose={this.toggleDatePicker(false)}
            />
          </>
        )}
      </PrayerTimeContext.Consumer>
    )
  }
}

PrayerList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrayerList)