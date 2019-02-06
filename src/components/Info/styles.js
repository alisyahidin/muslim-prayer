export default theme => ({
  paper: {
    maxWidth: 220,
    margin: 'unset'
  },
  content: {
    color: '#555555',
    textAlign: 'center',
    fontSize: '1rem',
    padding: theme.spacing.unit*2,
    '&:first-child': {
      paddingTop: theme.spacing.unit*2
    },
    '& > h5': {
      marginBottom: theme.spacing.unit
    },
    '& > p': {
      marginBottom: theme.spacing.unit
    }
  },
  iconWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: theme.spacing.unit,
    '&:last-child': {
      marginBottom: 'unset',
    }
  },
  icon: {
    width: 47,
    height: 47,
    boxShadow: 'unset',
    background: '#FFF',
  }
})