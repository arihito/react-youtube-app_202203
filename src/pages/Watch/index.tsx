import { Container, Grid } from '@material-ui/core'
import { VideoPlayerCard } from './VideoPlayerCard'
import { VideoHorizontalCard } from '../../components/VideoHorizontalCard'
import useStyles from './style'

export const Watch = () => {
  const styles = useStyles();
  return (
    <Container className={styles.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <VideoPlayerCard />
        </Grid>
        <Grid item xs={4}>
          <div className={styles.cardPadding}>
            <VideoHorizontalCard />
          </div>
          <div className={styles.cardPadding}>
            <VideoHorizontalCard />
          </div>
          <div className={styles.cardPadding}>
            <VideoHorizontalCard />
          </div>
          <div className={styles.cardPadding}>
            <VideoHorizontalCard />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
