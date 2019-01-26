export default theme => ({
  prayerBox: {
    boxSizing: 'border-box',
    width: 'calc(20% - 10px)',
    padding: theme.spacing.unit * 1.5,
    margin: 5,
    background: 'lightskyblue',
    borderRadius: 5,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#FFF'
  },
  month: {
    color: '#979BB1',
    background: '#FFF',
    marginRight: -(theme.spacing.unit * 1.2),
    marginTop: -(theme.spacing.unit),
  }
})