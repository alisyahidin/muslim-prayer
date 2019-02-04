import { smallScreen, navbarHeight } from '../../constants/'

export default theme => ({
  setting: {
    boxSizing: 'border-box',
    height: '100%',
    padding: 20,
    paddingBottom: 20 + navbarHeight
  },
  card: {
    padding: '0px 10px',
    margin: 'unset',
  },
  header: {
    width: '85%',
    color: '#979BB1',
    textAlign: 'center',
    borderBottom: 'solid 1px #F0F0F0',
    margin: '0px auto',
    marginBottom: theme.spacing.unit,
  },
  lists: {
    height: '100%',
    padding: 0,
  },
  list: {
    borderRadius: '8px',
    padding: 5,
  },
  textRoot: {
    padding: 0,
  },
  text: {
    color: '#979BB1',
    fontSize: smallScreen ? '0.75rem' : '1rem'
  },
  icon: {
    padding: 6,
    color: '#979BB1',
  }
})