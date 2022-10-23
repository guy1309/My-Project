import React from 'react';
import { Divider, List } from '@mui/material'; 
import Transaction from './Transaction';
import './HomeBalance.css';


const Transactions = ({transactions, setTransactions }) => {
  return (
   <div>
    <div className='div1'>Transactions History</div>
    <Divider />
    <List>
    {
    transactions.map(transaction => (
      <Transaction transaction ={transaction} setTransactions ={setTransactions} transactions={transactions}/>
    ))
     }
    </List>
   </div>
  )
}

export default Transactions