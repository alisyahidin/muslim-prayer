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

  render() {
    const { classes, open, handleClose, type } = this.props
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