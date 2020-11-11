import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    UserDetailform:{
      marginLeft:5,
      width: '15ch',
      display:'inline',
      

    },
    formControl: {
      margin: theme.spacing(3),
      minWidth: 220,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    InfoBtn:{
        backgroundColor:'green',
        color:'white',
        marginTop:theme.spacing(4),
        marginLeft:theme.spacing(5)
    },
    userInfo:{
      textAlign:'center',
      margin:10,
      borderWidth:2,
      borderStyle:'solid',
      borderRadius:5,
      borderColor:'#e8e8e8',
      width:'98%',
      height:'20vh'
    }
  }));
export default function MobInfo() {
    const classes = useStyles();
    const [brand, setBrand] = React.useState('');
    const [model, setModel] = React.useState('');
    const [Issue, setIssue] = React.useState('');
    const [userInfo,setUserInfo] = React.useState(false)
  

    return (
        <div>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={brand}
            onChange={(e)=>setBrand(e.target.value)}
            >
            <MenuItem value={10}>Apple</MenuItem>
            <MenuItem value={20}>Samsung</MenuItem>
            <MenuItem value={30}>OnePlus</MenuItem>
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={model}
            onChange={(e)=>setModel(e.target.value)}
            >
            <MenuItem value={10}>Iphone12</MenuItem>
            <MenuItem value={20}>S10 Plus</MenuItem>
            <MenuItem value={30}>8T Pro</MenuItem>
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Issue</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Issue}
            onChange={(e)=>setIssue(e.target.value)}
            >
            <MenuItem value={10}>Display</MenuItem>
            <MenuItem value={20}>Touch</MenuItem>
            <MenuItem value={30}>Speaker</MenuItem>
            <MenuItem value={40}>Mic</MenuItem>
            <MenuItem value={50}>Button</MenuItem>
            <MenuItem value={60}>Software</MenuItem>
            <MenuItem value={60}>Camera</MenuItem>
            </Select>
            </FormControl>
            <Button variant="contained" className={classes.InfoBtn} onClick={()=>{
              setUserInfo(true)
              console.log(brand,model,Issue)}}>
             Go!
            </Button>
            {userInfo?(
              <div className={classes.userInfo}>
                <h4 style={{padding:10}}>Enter Your Details</h4>
                <form className={classes.UserDetailform} noValidate autoComplete="off">
                <TextField  label="Name" variant="outlined" />
                <TextField  label="PickUp Address" variant="outlined" />
                <TextField  label="Contact No." variant="outlined" />
                <TextField  label="Email(Optional)" variant="outlined" />
                <Button variant="contained" color="primary" style={{display:"block",marginTop:5,marginLeft:'47%'}}>
                  Book Repair
            </Button>
              </form>
              </div> 
              ):null}
        </div>
    )
}
