import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import styles from './styles'

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class PrayerInfo extends Component {
  render() {
    const { classes, open, prayers, handleClose, date } = this.props

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
        <DialogTitle className={classes.title} id="alert-dialog-slide-title">
          {date}
        </DialogTitle>
        <DialogContent
          classes={{
            root: classes.content
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Prayer</TableCell>
                <TableCell align="center">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prayers.map(prayer => (
                <TableRow key={prayer.id}>
                  <TableCell align="left" component="th">
                    {prayer.name}
                  </TableCell>
                  <TableCell align="center" component="th">
                    {prayer.time}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions
          classes={{
            root: classes.action
          }}
        >
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

PrayerInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  prayers: PropTypes.array.isRequired,
  handleClose: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
}

export default withStyles(styles)(PrayerInfo)