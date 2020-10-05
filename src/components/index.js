import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Carousel from './UI/Slider'
import Header from './Header';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import AboutSVG from '../images/Astronaut-01.svg'
import BookSVG from '../images/repair.svg'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const featuredPosts = [
  {
    title: 'Lear More About Us',
    description:
      'We are here to provide seemless services at cost effective rate',
    image:AboutSVG,
    imageDesc:"About Us"
  },
  {
    title: 'Book Repair',
    description:
      'Get Lighting Fast Repair from our Excperienced Executives',
    image:BookSVG,
    imageDesc:"Repair"
  },
];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="LCD WAY"/>
        <main>
          <Carousel />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer description="LCD Way: Premium Services at Regular Cost" />
    </React.Fragment>
  );
}