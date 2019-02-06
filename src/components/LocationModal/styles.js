export default theme => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
    outline: 'none',
    borderRadius: 10,
    transition: 'all 400ms ease-out'
  },
  loader: {
    position: 'absolute',
  },
  wrapper: {
    boxSizing: 'content-box',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '1rem',
    textAlign: 'center',
    flexGrow: 0.5,
  },
  button: {
    boxShadow: 'none'
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
})