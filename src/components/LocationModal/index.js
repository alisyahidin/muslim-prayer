import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Modal from '@material-ui/core/Modal'
import Fab from '@material-ui/core/Fab'
import SaveIcon from '@material-ui/icons/Save'

import Select from '../Select/'
import Card from './Card'
import Wrapper from './Wrapper'
import Loader from './Loader'

import db from '../../utils/database'

import styles from './styles'

const countries = [
  { label: 'Indonesia' },
  { label: 'Palestine' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}))

const cities = [
  { label: 'Kuningan' },
  { label: 'Bandung' },
  { label: 'Bantul' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}))

class LocationModal extends React.Component {
  state = {
    prepare: true,
    country: null,
    city: null,
    saving: false,
  }

  handleSelect = name => value => {
    this.setState({
      [name]: value
    })
  }

  handleSave = () => {
    const { handleClose } = this.props
    const { country, city } = this.state

    this.setState({
      saving: true
    })

    db.open().then(async db => {
      const count = await db.settings.count()

      if (count === 0) {
        this.dbAdd()
      } else {
        this.dbUpdate()
      }
    })

  }

  dbUpdate = () => {
    const { handleClose } = this.props
    const { country, city } = this.state

    db.open().then(async db => {
      db.settings.update('location', {
        country: country,
        city: city
      }).then(result => {
        handleClose()
      })
    })
  }

  dbAdd = () => {
    const { handleClose } = this.props
    const { country, city } = this.state

    db.open().then(async db => {
      db.settings.add({
        name: 'location',
        country: country,
        city: city
      }).then(result => {
        handleClose()
      })
    })
  }

  componentDidMount() {
    db.open().then(async db => {
      const location = await db.settings.get('location')
      this.timer = setTimeout(() => {
        this.setState({
          country: typeof location !== 'undefined' ? location.country : null,
          city: typeof location !== 'undefined' ? location.city : null,
          prepare: false
        })
      }, 2000)
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { classes, open, handleClose, disableOnClose } = this.props
    const { prepare, country, city, saving } = this.state

    const disabled = country !== null && city !== null? false : true

    return (
      <Modal
        aria-labelledby="setup-dialog"
        aria-describedby="setup-dialog-description"
        onClose={disableOnClose ? () => {} : handleClose}
        open={open}
      >
        <Card pose={prepare ? 'small' : 'grow'} className={classes.paper}>
          <Loader className={classes.loader}><CircularProgress /></Loader>
          <Wrapper className={classes.wrapper}>
            <Typography className={classes.title} id="modal-title">
              Select Location
            </Typography>
            <Select
              value={country}
              placeholder="Country"
              options={countries}
              onChange={this.handleSelect('country')}
            />
            <Select
              value={city}
              placeholder="City"
              options={cities}
              onChange={this.handleSelect('city')}
            />
            <Fab
              onClick={this.handleSave}
              className={classes.button}
              color="primary"
              variant="extended"
              aria-label="Save"
              disabled={disabled}
            >
              <SaveIcon className={classes.extendedIcon} />
              {saving ? 'Saving' : 'Save'}
            </Fab>
          </Wrapper>
        </Card>
      </Modal>
    )
  }
}

LocationModal.defaultProps = {
  disableOnClose: false
}

LocationModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  disableOnClose: PropTypes.bool
}

export default withStyles(styles, { withTheme: true })(LocationModal)