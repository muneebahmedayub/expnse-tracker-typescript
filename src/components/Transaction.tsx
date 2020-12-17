import React, { useEffect, useRef } from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { TransactionProp } from '../Types'
import { gsap } from 'gsap'

const Transaction: React.FC<TransactionProp> = ({ addToRef, id, description, amount, income, handleDelete }) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        addToRef(ref)
        gsap.from(ref.current, { duration: 0.5, autoAlpha: 0, translateX: '-100%', boxShadow: 0, ease: 'circ.out' })
    }, [])
    return (
        <div ref={ref}>
            <Grid container item xs={12} component={Box} className={`transaction-div ${income ? 'income' : 'expense'}`}>
                <Grid item xs={3}>
                    <Typography><b>$</b>{amount}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>{description}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <DeleteIcon cursor='pointer' onClick={() => { handleDelete(id, ref) }} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Transaction
