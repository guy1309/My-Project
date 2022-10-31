import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';
import React from 'react';
import './NewTransactions.css';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';


const Detail = styled (ListItem)`
margin-top: 10px;
`

const Transaction = ({transaction, setTransactions, transactions}) => {

  const color =transaction.amount > 0 ? 'Green' : 'Red';

const deleteTransaction = (id) => {
  setTransactions(transactions.filter(transaction => transaction.id !==id));
}

  return (
    <Detail className='detail'>
      <ListItemIcon>
       <DeleteIcon onClick={()=> deleteTransaction(transaction.id)}/>
        </ListItemIcon>
        <ListItemText style={{color:`#000`}} >{transaction.text}</ListItemText>
        <ListItemText style={{color: `${color}`}}>{transaction.amount}</ListItemText>
    </Detail>
  )
};

export default Transaction