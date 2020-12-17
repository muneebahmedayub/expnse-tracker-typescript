import React from 'react'
//Styles
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import { HeaderProp } from '../Types'

const Header: React.FC<HeaderProp> = ({ HeaderRef }) => {
    return (
            <AppBar ref={HeaderRef} position='fixed' style={{ height: '10vh',position: "sticky",background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(0.5rem)'}}>
                <Toolbar>
                    <Typography variant='h4'>Expense Tracker</Typography>
                </Toolbar>
            </AppBar>
    )
}

export default Header
