import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <form action="">
            Username: <input type="text" /><br /><br />
            Password: <input type="password" name="password" id="password" /><br /><br />
            <input type="button" value="Submit" />
        </form>
        <Typography variant='h1'>Login Page</Typography><br /><br />
        <TextField variant='outlined' label="username"/><br /><br />
        <TextField variant='filled' label="username"/><br /><br />
        <TextField variant='standard' label="username"/><br /><br />
        <Button variant="text">Submit</Button><br /><br />
        <Button variant="contained">Submit</Button><br /><br />
        <Button variant="outlined">Submit</Button><br /><br />

    </div>
  )
}

export default Login