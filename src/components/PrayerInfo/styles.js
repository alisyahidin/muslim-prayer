export default theme => ({
  paper: {
    margin: 'unset'
  },
  title: {
    textAlign: 'center',
    padding: theme.spacing.unit*2,
    paddingBottom: theme.spacing.unit*2 - 6,
  },
  content: {
    padding: `0px ${theme.spacing.unit*3}px`
  },
  action: {
    display: 'flex',
    justifyContent: 'center'
  },
})