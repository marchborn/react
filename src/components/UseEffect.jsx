import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    var[data,setdata] = useState()

    const funcr = (e) => {
        console.log("clicked")
        setdata("React")
    }
    const funca = (e) => {
        console.log("clicked")
        setdata("Angular")
    }
    const funcn = (e) => {
        console.log("clicked")
        setdata("Next")
    }
    useEffect(()=>{
        funca();
    },[])
  return (
    <div>
        <br /><br />
        <Typography variant='h3'>Welcome to {data}</Typography><br /><br />
        <Button variant='contained' color='success' onClick={funcr} name="React">React</Button><br /><br />
        <Button variant='contained' color='error' onClick={funca} name="Angular">Angular</Button><br /><br />
        <Button variant='contained' onClick={funcn} name="Next">Next</Button><br /><br />

    </div>
  )
}

export default UseEffect