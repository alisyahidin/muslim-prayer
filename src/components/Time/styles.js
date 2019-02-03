export default theme => ({
  time: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: '#FFF',
    zIndex: -1,
    '&:hover': {
      cursor: 'default'
    }
  },
  timing: {
    marginTop: theme.spacing.unit / 2,
  },
  reminder: {
    fontSize: '1rem'
  }
})