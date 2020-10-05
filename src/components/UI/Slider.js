import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
Carousel:{
    width:'100%',
    border:'none',
    marginBottom:20,
  [theme.breakpoints.down('md')]: {
    width:'100%',
    height:window.innerHeight,
},
  [theme.breakpoints.down('sm')]: {
  height:'33vh',
}
},
images:{
    height:'60vh',
    [theme.breakpoints.down('md')]: {
        width:'100%',
        height:window.innerHeight,
    },
      [theme.breakpoints.down('sm')]: {
      height:'30vh',
    }
}
}));
const styles={indic:{backgroundColor:'red',color:"white"}}

const Slider = (props) =>
{
    const classes = useStyles()
    let items = [
        {
            name: "Photo1",
            img: "https://images.pexels.com/photos/3774094/pexels-photo-3774094.jpeg"
        },
        {
            name: "Photo2",
            img: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg"
        },
        {
            name: "Photo3",
            img: "https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg"
        },
    ]

    return (
      <Paper elevation={0} style={{backgroundColor:"#fafafa"}}>
        <Carousel className={classes.Carousel} style={{borderStyle:"none"}} animation="fade" timeout={300} indicators={true}>
            {
                items.map((item, i) => (<img key={i} className={classes.images} src={item.img} alt={item.name}/>))
            }
        </Carousel>
        </Paper>
    )
}

export default Slider
