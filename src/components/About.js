import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../images/aboutus.png'
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const useStyles = makeStyles({
    parent: {
      padding:'10px',
    },
    Info:{
        width:'50vw',
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:5,
        borderColor:'#e8e8e8',
    },
    contact:{
        display:'inline-flex',
        margin:10,
        padding:10,
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:5,
        borderColor:'#e8e8e8',
    }
  });

export default function About() {
    const classes = useStyles()

    return (
        <div className={classes.parent}>
            <img style ={{width:'50vw'}} src={Banner} alt='banner'/>
        <div className={classes.Info}>
            <p style={{padding:10}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
        <div className={classes.Info}>
        <div className={classes.contact}>
            <CallIcon style={{marginTop:15}}/> 
            <h3>+91-8565853680</h3>
        </div>
        <div className={classes.contact}>
            <LocationOnIcon style={{marginTop:15}}/> 
            <h3>Kanan ViharPhase 2, Patia, Bhubaneswar. PIN-751024</h3>
        </div>
        <div className={classes.contact}>
            <AlternateEmailIcon style={{marginTop:15}}/> 
            <h3>lcdwaybbsr@gmail.com</h3>
        </div>
        </div>
        </div>
    )
}
