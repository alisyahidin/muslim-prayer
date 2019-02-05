import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'

import { DateRange } from 'react-date-range'

import styles from './styles'

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class DatePicker extends Component {
  state = {
    startDate: new Date(),
    endDate: null,
    key: 'selection',
  }

  handleChange = ranges => {
    console.log(ranges)
    this.setState({ ...ranges })
  }

  render() {
    const { classes, open, handleClose, type } = this.props

    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
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
            ranges={[this.state]}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions
          classes={{
            root: classes.action
          }}
        >
          <Button onClick={handleClose} color="primary">
            {type.toUpperCase()}
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