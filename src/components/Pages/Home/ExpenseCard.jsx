import React from 'react';
import { Box, Card, CardContent, Typography, styled } from '@mui/material';
import './ExpenseCard.css';





const ExpenseCard = ({transactions}) => {

  const amount = transactions.map(transaction => transaction.amount);
  
  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item) , 0).toFixed(2);
  const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item) , 0) * -1).toFixed(2);
  
  

  return (
  <Box className='containerr'>
      <Card>
<CardContent className='income'>
    <Typography >Income</Typography>
    <Typography className='green' >${income}</Typography>
</CardContent>
  </Card>


  <Card>
<CardContent className='expense'>
    <Typography >Expense</Typography>
    <Typography className='red'>${expense}</Typography>
</CardContent>
  </Card>

  </Box>
  )
}

export default ExpenseCard