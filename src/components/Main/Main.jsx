import React, {useContext} from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@mui/material'
import { ExpenseTrackerContext } from '../../Context/Context'
import './Main.css'
import Form from './Form/Form'
import List from './List/List'
import InfoCard from '../InfoCard'
const Main = () => {
    const {balance} = useContext(ExpenseTrackerContext);
  return (
    <div>
        {
           window.innerWidth < 458 ? (
                <Card className = "main">
                <CardHeader title="Expense Tracker" subheader="Rushiraj's Project"/>
                <CardContent>
                    <Typography align="center" variant="h5"> Total Balance ₹{balance} </Typography>
                    <Typography variant="subtitle1" style={{lineHeight : '1.5em', marginTop: '20px'}}>
                        <InfoCard/>  
                    </Typography> 
                    <Divider/>
                    <Form/>
                </CardContent>
                <CardContent className='cardContent'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
           ) : (
            <Card  >
                <CardHeader title="Expense Tracker" subheader="Rushiraj's Project"/>
                <CardContent>
                    <Typography align="center" variant="h5"> Total Balance ₹{balance} </Typography>
                    <Typography variant="subtitle1" style={{lineHeight : '1.5em', marginTop: '20px'}}>
                        <InfoCard/>  
                    </Typography> 
                    <Divider/>
                    <Form/>
                </CardContent>
                <CardContent className='cardContent'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
           )
        }
        

    </div>
  )
}

export default Main