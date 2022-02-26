import { withStyles } from '@material-ui/styles'

export default withStyles({
  '@global': {
    html: {
      width: '100%',
      height: '100%'
    },
    body: {
      width: '100%',
      height: '100%'
    },
    '#root': {
      width: '100%',
      height: '100%'
    },
    // 補足で画像幅のスマホ対応
    img: { display: 'block', maxWidth: '100%' }
  }
})(() => null)
