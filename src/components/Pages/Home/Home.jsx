import React from "react";
import "./Home.css";
import HomeBalance from "./HomeBalance";
import ExpenseCard from "./ExpenseCard";
import NewTransactions from "./NewTransactions";
import Transactions from "./Transactions";

import { useState } from "react";

const Home = () => {

const [transactions, setTransactions] = useState([
  {id: 1, text: 'Salary', amount: 8000 },
  {id: 2, text: 'Apple', amount: -90 },
  {id: 3, text: 'visa ', amount: -850 },
  {id: 4, text: 'Bonus', amount: 1500 }
])

  return (
    <div className="home">
      <div className="geader">Expense Tracker </div>
      <div className="box3">
        <div>
          <HomeBalance transactions = {transactions}/>
          <ExpenseCard transactions = {transactions}/>
          <NewTransactions setTransactions ={setTransactions}/>
        </div>
        <div className="box4">
           <Transactions transactions ={transactions} setTransactions = {setTransactions}/> 
          </div>
      </div>
    </div>
  );
};

export default Home;
