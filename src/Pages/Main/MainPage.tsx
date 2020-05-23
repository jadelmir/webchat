import React, {Fragment} from 'react'
import {ChatContent} from './ChatContent/ChatContent'
import {SideBar} from './sideBar/SideBar'
import { Grid } from '@material-ui/core'
import {styles} from './styles'
export const MainPage = ()=>{
    const classes = styles()
    return (
        <Fragment>
            <Grid container   className={classes.mainBackground}   >
                <SideBar />
                <ChatContent />
            </Grid>
        </Fragment>
        
    )
}