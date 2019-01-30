export default theme => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
    outline: 'none',
    borderRadius: 10,
    transition: 'all 400ms ease-out'
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    boxShadow: 'none'
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
})