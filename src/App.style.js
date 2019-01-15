export default theme => ({
  container: {
    height: '100vh',
    backgroundColor: '#F0F0F0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  body: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '400px',
    },
    maxWidth: '500px',
    maxHeight: '900px',
  }
})