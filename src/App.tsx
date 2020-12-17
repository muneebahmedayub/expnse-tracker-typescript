import React, { RefObject, useEffect, useRef, useState } from 'react';
//Styles
import { Grid, makeStyles } from '@material-ui/core';
import './App.css';
//Components
import Header from './components/Header'
import Info from './components/Info'
import TransactionHistory from './components/TransactionHistory';
//Types
import { TransactionType } from './Types'

import { gsap } from 'gsap'

import firebase from './firebase'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100vh'
  }
})

function App() {
  const messaging = firebase.messaging()
  messaging.requestPermission().then(() => {
    return messaging.getToken()
  }).then((token) => {
    console.log('token', token)
  })


  const classes = useStyles()

  const [transactions, setTransactions] = useState<TransactionType[]>([
   
  ])

  const allRef = useRef<HTMLDivElement[]>([])
  const addToRef = (el: RefObject<HTMLDivElement>) => {
    if (el.current && !allRef.current.includes(el.current)) {
      allRef.current.push(el.current)
    }
  }

  const handleDelete = (id: number, ObjRef: RefObject<HTMLDivElement>) => {
    const remove = async () => {
      gsap.to(ObjRef.current, {duration: 0, pointerEvents: 'none'})
      gsap.to(ObjRef.current, { duration: 0.5, autoAlpha: 0, ease: 'circ.out' })

      
      if (ObjRef.current === null) {
        null
      }
      else {
        const index = allRef.current.indexOf(ObjRef.current)
        await gsap.to(allRef.current.slice(0, index), {duration: 0.5, translateY: '-100%', ease: 'circ.out'})
        gsap.to(allRef.current.slice(0, index), {duration: 0, translateY: '0', ease: 'circ.out'})
      }
      
      allRef.current = allRef.current.filter(ref => ref !== ObjRef.current)

      setTransactions(transactions.filter((transaction) => {
        return transaction.id !== id
      }))
    }
    remove()
  }

  const InfoRef = useRef<HTMLDivElement>(null)
  const HeaderRef = useRef<HTMLDivElement>(null)
  const TransactionHistoryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.from(HeaderRef.current, { duration: 2, autoAlpha: 0, translateY: '-100%', ease: 'circ.out' })
    gsap.from(InfoRef.current, { duration: 2, autoAlpha: 0, translateX: '-25%', ease: 'circ.out' })
    gsap.from(TransactionHistoryRef.current, { duration: 2, autoAlpha: 0, translateY: '25%', ease: 'circ.out' })
  }, [])

  return (
    <div className="App">
      <Header HeaderRef={HeaderRef} />
      <Grid className={classes.root} container justify='space-around'>
        <Grid item>
          <Info transactions={transactions} setTransactions={setTransactions} InfoRef={InfoRef} allRef={allRef} />
        </Grid>
        <Grid item>
          <TransactionHistory addToRef={addToRef} transactions={transactions} handleDelete={handleDelete} TransactionHistoryRef={TransactionHistoryRef} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
