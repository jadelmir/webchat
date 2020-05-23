import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import {styles} from './styles'
export const SideBar = () =>{
    const classes = styles()
    return <Grid item className={classes.sideBar} >
        <Paper className={classes.paper}>
       
        </Paper>
       
    </Grid>
} 