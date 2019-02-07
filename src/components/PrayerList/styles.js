import { navbarHeight, smallScreen } from '../../constants/'

export default theme => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prayerList: {
    boxSizing: 'border-box',
    height: '60%',
    padding: smallScreen ? 15 : 25,
    paddingBottom: (smallScreen ? 15 : 25) + navbarHeight,
  },
  lists: {
    width: '100%',
    height: '100%',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  list: {
    borderRadius: '8px',
  },
  listSelected: {
    background: 'rgba(0, 0, 0, 0.05) !important'
  },
  text: {
    color: '#979BB1',
    fontSize: smallScreen ? '0.8rem' : '1rem'
  },
  icon: {
    padding: 6,
    color: '#979BB1',
  },
  loader: {
    color: '#FFF',
    marginTop: 3,
    marginBottom: 3,
    width: `${theme.spacing.unit*2}px !important`,
    height: `${theme.spacing.unit*2}px !important`,
  }
})