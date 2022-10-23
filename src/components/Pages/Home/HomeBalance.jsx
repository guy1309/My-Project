import React from 'react';
import { Card } from 'react-bootstrap'; 
import './HomeBalance.css';



const HomeBalance = ({transactions}) => {
  
  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item) , 0).toFixed(2);
  
  return (
    
        <Card className='text1'> Balance: ₪{total} </Card>
        
    
  )
}

export default HomeBalance