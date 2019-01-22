const ratio = Math.round(window.innerHeight/window.innerWidth)
const landscape = Math.round(window.innerHeight / (18.5 / 9))
const portrait = '100%'

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
    maxWidth: ratio > 1 ? portrait : landscape,
  }
})