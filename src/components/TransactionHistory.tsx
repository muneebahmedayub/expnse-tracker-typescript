import React from 'react'
//Styles
import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'
//Types
import { TransactionHistoryProp } from '../Types';
import Transaction from './Transaction';

const TransactionHistory: React.FC<TransactionHistoryProp> = ({ transactions, handleDelete }) => {
    return (
        <div>
            <Card className='transaction-history'>
                <CardContent>
                    <Typography variant='h5'>Transaction History</Typography>
                    <Divider />

                    <Grid container style={{ marginTop: 10, flexDirection: 'column-reverse' }}>
                        {transactions.map(({id, description, amount, income}) => {
                            return (
                                <Transaction 
                                    key={id}
                                    id={id}
                                    description={description}
                                    amount={amount}
                                    income={income}
                                    handleDelete={handleDelete}
                                />
                            )
                        })}
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default TransactionHistory
