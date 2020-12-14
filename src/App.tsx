import React, { useState } from 'react';
//Styles
import { Grid, makeStyles } from '@material-ui/core';
import './App.css';
//Components
import Header from './components/Header'
import Info from './components/Info'
import TransactionHistory from './components/TransactionHistory';
//Types
import { TransactionType } from './Types'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100vh'
  }
})

function App() {
  const classes = useStyles()

  const [transactions, setTransactions] = useState<TransactionType[]>([
    {
      id: Math.floor(Math.random() * 1000000),
      description: 'Income',
      amount: 100,
      income: true
    },
    {
      id: Math.floor(Math.random() * 1000000),
      description: 'Expense',
      amount: 200,
      income: false
    },
  ])

  const handleDelete = (id: number) => {  
    setTransactions(transactions.filter((transaction) => {
      return transaction.id !== id
    }))
  }

  return (
      <div className="App">
        <Header />
        <Grid className={classes.root} container alignItems='flex-start' justify='space-around'>
          <Grid item style={{height: '100%'}}>
            <Info transactions={transactions} setTransactions={setTransactions} />
          </Grid>
          <Grid item>
            <TransactionHistory transactions={transactions} handleDelete={handleDelete} />
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
