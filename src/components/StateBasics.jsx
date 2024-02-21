import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const StateBasics = () => {
    var[fname,setfname] = useState('Bappu');
    var [val,setval] = useState()
    const handleInput = (e)=>{
        // console.log(e.target.value);
         setval(e.target.value)  
    }
    const submitHandler = ()=>{
        console.log("clicked")
        setfname(val);
    }
  return (
    <div>
        <br /><br />
        <Typography variant='h4'>Welcome {fname}</Typography><br /><br />
        <TextField variant='outlined' onChange={handleInput}></TextField><br /><br />
        <Button variant='contained' onClick={submitHandler}>Button</Button><br /><br />
    </div>
  )
}

export default StateBasics