import { AppBar, Button, Toolbar, Typography} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>APP</Typography>
                <Button id="nav">
                <Link to='/' style={{color:'white'}}>Login</Link></Button>
                <Button id="nav">
                <Link to='/signup' style={{color:'white'}}>Signup</Link></Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar