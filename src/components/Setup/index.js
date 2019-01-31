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

class SetupModal extends React.Component {
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
    const { handleSetupSave } = this.props

    this.setState({
      saving: true
    }, () => {
      this.timer = setTimeout(() => handleSetupSave(), 2000)
    })
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      prepare: false,
    }), 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { classes, installed } = this.props
    const { prepare, country, city, saving } = this.state

    const disabled = country !== null && city !== null? false : true

    return (
      <Modal
        aria-labelledby="setup-dialog"
        aria-describedby="setup-dialog-description"
        open={!installed}
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

SetupModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(SetupModal)