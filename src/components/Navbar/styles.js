import { navbarHeight, smallScreen } from '../../constants/'

export default theme => ({
  navbar: {
    background: '#FFF',
    position: 'absolute',
    top: 'auto',
    height: navbarHeight,
    width: '100%',
    boxShadow: `0px 1px 5px 0px rgba(0,0,0,0.2),
      0px 2px 2px 0px rgba(0,0,0,0.14),
      0px 3px 1px -2px rgba(0,0,0,0.12)`,
    zIndex: '20',

  },
  tab: {
    height: navbarHeight,
    minWidth: 'unset',
    minHeight: 'unset',
  },
  icon: {
    fontSize: smallScreen ? 20 : 24,
  }
})