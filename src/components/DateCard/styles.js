export default theme => ({
  dateCard: {
    boxSizing: 'border-box',
    width: 'calc(20% - 10px)',
    padding: theme.spacing.unit * 1.5,
    paddingTop: theme.spacing.unit * 2.5,
    paddingBottom: theme.spacing.unit * 0.7,
    margin: '7px 5px',
    background: 'lightskyblue',
    borderRadius: 5,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  month: {
    position: 'absolute',
    top: 2,
    width: '90%',
    color: '#979BB1',
    background: '#FFF',
    borderRadius: 3,
  },
  date: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#FFF'
  },
})