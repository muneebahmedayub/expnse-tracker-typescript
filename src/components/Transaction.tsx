import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { TransactionProp } from '../Types'

const Transaction: React.FC<TransactionProp> = ({id, description, amount, income, handleDelete}) => {
    return (
        <div>
            <Grid container item xs={12} component={Box} className={`transaction-div ${income ? 'income' : 'expense'}`}>
                <Grid item xs={3}>
                    <Typography>${amount}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>{description}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <DeleteIcon cursor='pointer' onClick={() => { handleDelete(id) }} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Transaction
