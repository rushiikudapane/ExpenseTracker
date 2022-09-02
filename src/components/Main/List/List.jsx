import React,{ useContext } from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@mui/material'
import { Delete, MoneyOff} from '@mui/icons-material'
import './List.css';
import { ExpenseTrackerContext } from '../../../Context/Context'


const List = () => {
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext);
  return (
    <div>
        <MUIList dense={false} className='list'>
            {transactions.map((transaction)=>(
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            {
                                transaction.type ==='Income' ? (
                                    <Avatar style={{color: "aliceblue" ,backgroundColor: "green"}}>
                                        <MoneyOff/>
                                    </Avatar>
                                ) : (
                                    <Avatar style={{color: "aliceblue", backgroundColor: "red"}}>
                                        <MoneyOff/>
                                    </Avatar>
                                )
                            }
                            
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`₹${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={()=> deleteTransaction(transaction.id)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>

            ))}
        </MUIList>
        
    </div>
  )
}

export default List