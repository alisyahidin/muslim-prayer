import React, { Component } from 'react'
import Loadable from 'react-loadable'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import AlarmIcon from '@material-ui/icons/Alarm'
import CircularProgress from '@material-ui/core/CircularProgress'

import Card from '../Card/'
import PrayerTime from '../../contexts/PrayerTime'
import Timing from '../../contexts/Timing'

import empty from '../../assets/empty-state/prayer.png'
import styles from './styles'

const EmptyState = Loadable({
  loader: () => import('../EmptyState/'),
  loading: () => <input type="hidden" />
})

class PrayerList extends Component {
  static contextType = PrayerTime

  state = {
    loading: false
  }

  getPrayerTime = () => {
    const { setPrayerTime } = this.context

    this.setState({ loading: true }, () => {
      setTimeout(() => {
        setPrayerTime()
        this.setState({loading: false})
      }, 4000)
    })
  }

  render() {
    const { classes } = this.props
    const { prayer } = this.context
    const { loading } = this.state

    return (
      <Timing.Consumer>
        {({timing, updateTiming}) => (
          <div className={classes.prayerList}>
            <Card className={classes.card}>
              {prayer.length === 0 && (
                <EmptyState
                  img={empty}
                  message="There is no prayer time"
                  handleClick={this.getPrayerTime}
                  action={loading ? <CircularProgress className={classes.loader} /> : 'Update'}
                />
              )}
              {prayer.length > 0 && (
                <List className={classes.lists} component="ul">
                  {prayer.map((prayer, i) => (
                    <ListItem
                      selected={timing === prayer.id}
                      key={i}
                      onClick={() => updateTiming(prayer.id)}
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
        )}
      </Timing.Consumer>
    )
  }
}

PrayerList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrayerList)