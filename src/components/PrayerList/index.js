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
import PrayerTimeContext from '../../contexts/PrayerTime'
import Timing from '../../contexts/Timing'

import styles from './styles'

class PrayerList extends Component {
  static contextType = Timing

  updatePrayer = prayer => () => {
    const { updateTiming, clearTiming } = this.context

    updateTiming(prayer)
    clearTiming()
  }

  render() {
    const { classes } = this.props

    return (
      <PrayerTimeContext.Consumer>
        {({prayers}) => (
        <div className={classes.prayerList}>
          <Card>
            <List className={classes.lists} component="nav">
              {prayers.map((prayer, i) => (
                <ListItem
                  key={i}
                  onClick={this.updatePrayer(prayer.id)}
                  className={classes.list}
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
          </Card>
        </div>
        )}
      </PrayerTimeContext.Consumer>
    )
  }
}

PrayerList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrayerList)