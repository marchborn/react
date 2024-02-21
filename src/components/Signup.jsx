import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var[data,setdata] = useState()

    const inputHandler = (e) => {
        
        setdata({...data,[e.target.name]: e.target.value})
        console.log(data)

    }

  return (
    <div>
        <br /><br />
        <Typography variant='h3'>Signup Form</Typography><br /><br />
        <TextField variant='outlined' label="Email"  name="email" onChange={inputHandler}></TextField><br /><br />
        <TextField variant='outlined' label="Password" name='password' onChange={inputHandler}></TextField><br /><br />
        <TextField variant='outlined' label="Username" name='username' onChange={inputHandler}></TextField><br /><br />
        <Button variant='contained' color='success'>Submit</Button>


    </div>
  )
}

export default Signup