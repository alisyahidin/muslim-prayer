export default theme => ({
  emptyState: {
    color: '#979BB1',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  illustration: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '0.8rem',
    marginBottom: theme.spacing.unit*3,
  },
  icon: {
    width: window.innerHeight <= 520 ? '40%' : '60%',
    marginBottom: theme.spacing.unit*2,
  },
  buttonRoot: {
    backgroundColor: '#3eafff',
    '&:hover': {
      backgroundColor: '#3eafff',
    }
  },
  buttonLabel: {
    textTransform: 'capitalize'
  }
})