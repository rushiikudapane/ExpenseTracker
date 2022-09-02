import React from 'react'
import {Card, CardHeader, CardContent, Typography } from '@mui/material'
import './details.css'
import useTransactions from '../../useTransactions'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2'
// import useStyles from './styles'

const Details = ({title}) => {
  // const classes = useStyles();
  const {total, chartData} = useTransactions(title)

  return (
    <div>
      {
        window.innerWidth < 458 ? (
          <Card className = 'style' style={title === "Income" ? {borderBottom: "10px solid rgba(0, 128, 0, 0.9)", marginLeft: "30px", marginRight: "30px"} : {borderBottom: "10px solid rgba(255, 0, 0, 0.8)", marginLeft: "30px", marginRight: "30px", marginBottom: '40px'}} >
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5"> ₹{total} </Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
        ) : (
          <Card className = 'style' style={title === "Income" ? {borderBottom: "10px solid rgba(0, 128, 0, 0.9)", marginLeft: "30px", marginRight: "30px"} : {borderBottom: "10px solid rgba(255, 0, 0, 0.8)", marginLeft: "30px", marginRight: "30px"}} >
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5"> ₹{total} </Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
        )
      }
    </div>
  )
}

export default Details