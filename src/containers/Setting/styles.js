import { smallScreen, navbarHeight } from '../../constants/'

export default theme => ({
  setting: {
    boxSizing: 'border-box',
    background: '#FFF',
    height: '100%',
    padding: 16,
    paddingBottom: 16 + navbarHeight,
    paddingTop: 0,
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
    paddingLeft: `${theme.spacing.unit * 3}px !important`,
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