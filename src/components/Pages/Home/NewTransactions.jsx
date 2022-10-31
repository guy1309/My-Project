import React from 'react';
import { TextField,  Button, Typography } from '@mui/material';
import './NewTransactions.css';
import { useState } from 'react';




const NewTransactions = ({setTransactions}) => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const addTransaction = () =>{
  const transaction = {
    id: Math.round(Math.random() * 1000000),
    text:text,
    amount: +amount
  }
  setTransactions(prevState => [transaction, ...prevState]);
  }
  return (

    <div>
    <Typography className='typo'>
    New Transaction
    </Typography>
    
    <TextField  
      label='Enter Transaction' 
     onChange ={(e) => setText(e.target.value)}
     />


    <TextField
    label='Enter Expense' 
    type= 'number'
    onChange ={(e) => setAmount(e.target.value)}
    />
    
    
    <Button className='text2' onClick={() => addTransaction()}>Add Transaction</Button>
    </div>
     
  )
}

export default NewTransactions;


