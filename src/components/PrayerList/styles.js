import { navbarHeight, smallScreen } from '../../constants/'

export default theme => ({
  prayerList: {
    boxSizing: 'border-box',
    height: '60%',
    padding: smallScreen ? 15 : 25,
    paddingBottom: (smallScreen ? 15 : 25) + navbarHeight,
  },
  lists: {
    height: '100%',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  list: {
    borderRadius: '8px',
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