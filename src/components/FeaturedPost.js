import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import Repair from './Reapir'
import About from './About'

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    height: 180
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false)
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" onClick={()=>setOpen(true)}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5" style={{marginBottom:20}}>
                {post.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <img className={classes.cardMedia} src={post.image} alt={post.imageDesc} />
          </Hidden>
        </Card>
      </CardActionArea>
      <Dialog
        maxWidth='lg'
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {post.title === 'Book Repair' ? <Repair /> : <About/>}
      </Dialog>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};