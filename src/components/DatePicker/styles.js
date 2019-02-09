export default theme => ({
  paper: {
    margin: 'unset'
  },
  title: {
    textAlign: 'center',
    padding: theme.spacing.unit*2,
    paddingBottom: theme.spacing.unit*2 - 6,
  },
  content: {
    padding: '0px !important'
  },
  datePicker: {
    '& > .rdrMonths .rdrMonth': {
      width: 'unset'
    }
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing.unit*2
  },
  button: {
    backgroundColor: '#3eafff !important',
  },
  buttonLabel: {
    textTransform: 'capitalize !important'
  }
})