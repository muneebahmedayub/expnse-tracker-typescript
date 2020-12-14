import React, { useState } from 'react'
//Styles
import { Box, Button, Card, CardContent, Grid, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core'
import { InfoProp } from '../Types'

const Info: React.FC<InfoProp> = ({ transactions, setTransactions }) => {
    const [value, setValue] = useState<number>(0)
    const [descErr, setDescErr] = useState<boolean>(false)
    const [amtErr, setAmtErr] = useState<boolean>(false)

    const [description, setDescription] = useState<string>('')
    const [amount, setAmount] = useState<number>(0)

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    const incomeObj = transactions.filter((obj) => {
        return obj.income === true
    })
    const incomeAmounts = incomeObj.map((obj) => {
        return obj.amount
    })
    const income = incomeAmounts.reduce((acc, item) => acc + item, 0)

    const expenseObj = transactions.filter((obj) => {
        return obj.income === false
    })
    const expenseAmounts = expenseObj.map((obj) => {
        return obj.amount
    })
    const expense = expenseAmounts.reduce((acc, item) => acc + item, 0)

    const total = (income - expense).toFixed(2)

    const handleDescription = (e: React.ChangeEvent<{ value: string }>) => {
        setDescription(e.target.value)
    }

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAmount(parseFloat(e.target.value))
    }

    const handleClick = () => {
        if (description && amount !== 0) {
            setTransactions([
                ...transactions,
                {
                    id: Math.floor(Math.random() * 1000000),
                    description,
                    amount,
                    income: value ? false : true
                }
            ])

            setDescription('')
            setAmount(0)
            
            setDescErr(false)
            setAmtErr(false)
        }
        else {
            setDescErr(false)
            setAmtErr(false)
            if (!description) {
                setDescErr(true)
            }
            if (amount === 0) {
                setAmtErr(true)
            }
        }


    }

    return (
        <div>
            <Card className='info'>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box className='current-balance' textAlign='center'>
                                <Typography variant='h4' gutterBottom>Current Balance</Typography>
                                <Typography variant='h5'>${total}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='income-div' textAlign='center'>
                                <Typography variant='h4' gutterBottom>Income</Typography>
                                <Typography variant='h5'>${income}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='expense-div' textAlign='center'>
                                <Typography variant='h4' gutterBottom>Expense</Typography>
                                <Typography variant='h5'>${expense}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <div className="new-transaction">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Paper>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant='fullWidth'
                                    >
                                        <Tab label='Income' />
                                        <Tab label='Expense' />
                                    </Tabs>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField variant='filled' error={descErr} label='Description' value={description} onChange={handleDescription} fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField variant='filled' error={amtErr} label='Amount' value={amount !== 0 ? amount : ''} type='number' onChange={handleAmount} fullWidth />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button variant='contained' color='primary' onClick={handleClick} fullWidth>Add New Transaction</Button>
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Info
