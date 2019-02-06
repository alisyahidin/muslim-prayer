import { navbarHeight, smallScreen } from '../../constants/'

export default theme => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyState: {
    fontSize: '1.1rem',
    color: '#979BB1',
    '&:hover': {
      cursor: 'pointer'
    }
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
  }
})