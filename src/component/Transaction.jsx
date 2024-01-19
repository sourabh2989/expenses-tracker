import styled from '@emotion/styled'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React from 'react'

const Detail=styled(ListItem)`
margin-top:10px;



`
const Transaction = ({transaction ,setTransactions ,transactions}) => {
  const color=transaction.amount>0?"green":"red";
  const deleteTransaction=(id)=>{
    setTransactions(transactions.filter(transaction => transaction.id !== id))

  }

  return (
    <Detail style={{background:`${color}` ,color:"#fff"}}>
      <ListItemIcon>
        <DeleteForeverIcon onClick={()=>deleteTransaction(transaction.id)}/>
      </ListItemIcon>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
        
    </Detail>
  )
}

export default Transaction;
