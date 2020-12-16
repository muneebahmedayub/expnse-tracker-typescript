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
    height: '90vh',
    overflow: "scroll"
  }
})

function App() {
  const classes = useStyles()

  const [transactions, setTransactions] = useState<TransactionType[
    ]>([
    
      {
        id: 846757,
        description: "Test",
        amount: 9,
        income: true
      },
      {
        id: 6193,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 6134593,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 61912433,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 623435679355193,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 63567935134593,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 6359635769145393,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 61945636593563,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 613659853679894563,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 61635835684563,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 61945365893568763,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 6194586745679834563,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 61945678456784563,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 6194856465784563,
        description: "Test",
        amount: 8,
        income: true
      },
      {
        id: 6194563,
        description: "Test",
        amount: 8,
        income: true
      }
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
          <Grid item className="balance-container" style={{height: '100%'}}>
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
