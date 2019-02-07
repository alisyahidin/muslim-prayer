import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Grow from '@material-ui/core/Grow';
import { DateRange } from 'react-date-range'

import PrayerTime from '../../contexts/PrayerTime'

import styles from './styles'

function Transition(props) {
  return <Grow {...props} />
}

class DatePicker extends Component {
  static contextType = PrayerTime

  state = {
    startDate: new Date(),
    endDate: new Date(),
  }

  handleChange = ranges => {
    this.setState({
      ...ranges.selection
    })
  }

  closeAndReset = () => {
    this.setState({
      startDate: new Date(),
      endDate: new Date(),
    }, () => this.props.handleClose())
  }

  getMinDate = () => {
    return this.props.type === 'delete'
      ? moment('01 02 2019', 'DD MM YYYY')
      : moment('01 01 2019', 'DD MM YYYY')
  }

  getMaxDate = () => {
    return this.props.type === 'delete'
      ? moment('27 02 2019', 'DD MM YYYY')
      : moment().add(5, 'y')
  }

  handleClick = () => {
    const { updatePrayerTimes, deletePrayerTimes } = this.context
    const { startDate, endDate } = this.state

    const start = moment(startDate).format('D')
    const end = moment(endDate).format('D')

    if (this.props.type === 'update') {
      console.log('updating')
      updatePrayerTimes(start, end)
    }
    if (this.props.type === 'delete') {
      console.log('deleting')
      deletePrayerTimes(start, end)
    }

    this.props.handleClose()
  }

  render() {
    const { classes, open, type } = this.props
    const ranges = [{...this.state, key: 'selection'}]

    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.closeAndReset}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        classes={{
          paper: classes.paper
        }}
      >
        <DialogContent
          classes={{
            root: classes.content
          }}
        >
          <DateRange
            className={classes.datePicker}
            ranges={ranges}
            minDate={new Date(this.getMinDate())}
            maxDate={new Date(this.getMaxDate())}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions
          classes={{
            root: classes.action
          }}
        >
          <Button onClick={this.handleClick} color="primary">
            {type !== null && type.toUpperCase()}
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['update', 'delete'])
}

export default withStyles(styles)(DatePicker)