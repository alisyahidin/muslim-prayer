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
    color: '#AAAAAA',
    fontSize: smallScreen ? '0.75rem' : '1rem'
  },
  icon: {
    padding: 6,
    color: '#AAAAAA',
  }
})