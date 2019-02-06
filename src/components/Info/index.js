import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grow from '@material-ui/core/Grow'
import Fab from '@material-ui/core/Fab'

import facebook from '../../assets/icon/facebook.svg'
import github from '../../assets/icon/github.svg'
import gmail from '../../assets/icon/gmail.svg'
import linkedin from '../../assets/icon/linkedin.svg'

import styles from './styles'

function Transition(props) {
  return <Grow {...props} />
}

class Info extends Component {
  render() {
    const { classes, open, handleClose } = this.props

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
          <p>
            Muslim Prayer is a Progressive Web App (PWA) prayer reminder for muslim.
            Of course, muslim prayer can be used offline.
          </p>
          <div className={classes.iconWrapper}>
            <Fab className={classes.icon}>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/alisyahidin/muslim-prayer">
                <img style={{width: 24}} src={github} alt="github"/>
              </a>
            </Fab>
          </div>
          <h5>Creator Contact</h5>
          <div className={classes.iconWrapper}>
            <Fab className={classes.icon}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/AliSyahidin19">
                <img style={{width: 24}} src={facebook} alt="facebook"/>
              </a>
            </Fab>
            <Fab className={classes.icon}>
              <a target="_blank" rel="noopener noreferrer" href="mailto:alisyahidin.me@gmail.com">
                <img style={{width: 24}} src={gmail} alt="gmail"/>
              </a>
            </Fab>
            <Fab className={classes.icon}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alisyahidin">
                <img style={{width: 24}} src={linkedin} alt="linkedin"/>
              </a>
            </Fab>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(Info)