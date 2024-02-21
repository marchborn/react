import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setcount] = useState(0)
    
    const submitPlus = () => {
        setcount(count+1)
    }
    const submitMinus = () => {
        setcount(count-1)
    }
  return (
    <div>
        <Typography variant='h3'>Count:{count}</Typography><br /><br />
        <Button variant='contained' color='success' onClick={submitPlus}>+</Button><br /><br />
        <Button variant='contained' color='error' onClick={submitMinus}>-</Button><br /><br />

    </div>
  )
}

export default Counter