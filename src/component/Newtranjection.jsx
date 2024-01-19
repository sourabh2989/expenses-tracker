
import React, { useState } from 'react'
import { Box, TextField, Typography ,Button} from '@mui/material';

import styled from '@emotion/styled';

const Container=styled(Box)`
display:flex;
flex-direction:column;
& > h5 ,&>div,&> Button{
    margin-top:30px;

}

`

const Newtranjection=({setTransactions})=> {

    const [text,setText]=useState('');
    const [amount,setAmount]=useState();

    const addtransaction=()=>{
        const transaction={
            id:Math.floor(Math.random()*100000),
            text:text,
            amount:+amount 
        }
        setTransactions(prevstate=>[transaction,...prevstate]);

    }
  return (
    <Container>
        <Typography variant='h5'>New Transaction</Typography>
        <TextField label="Enter Expenses" onChange={(e)=>setText(e.target.value)} ></TextField>
        <TextField label="Enter Amount" onChange={(e)=>setAmount(e.target.value)} ></TextField>
        <Button variant='contained' onClick={()=>addtransaction()}>Add transaction</Button>
    </Container>
  )
}
export default Newtranjection;
