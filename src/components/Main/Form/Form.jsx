import React, {useState, useEffect, useContext} from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import './Form.css'
import { ExpenseTrackerContext } from '../../../Context/Context';
//used to create unique id for each new object 
import {v4 as uuidv4} from 'uuid';
// import { TextFieldsSharp } from '@mui/icons-material';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import { useSpeechContext } from '@speechly/react-client/dist/hooks';
import CustomizedSnackbar from '../../Snackbar/Snackbar';





const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

const Form = () => {
    const [formData, setFormData] = useState(initialState)

    //calling reducer to change state
    const {addTransaction} = useContext(ExpenseTrackerContext)
    const {segment} = useSpeechContext();

    const[open, setOpen] = useState(false);


    //creates new transaction and adds it to the object array
    const createTransaction = () => {
        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4() }

        setOpen(true);
        addTransaction(transaction);
        setFormData(initialState);
    }

    useEffect(() => {
        if(segment){
            if(segment.intent.intent === 'add_expense'){
                setFormData({ ...formData, type: 'Expense'});
            }else if (segment.intent.intent === 'add_income'){
                setFormData({...formData, type: 'Income'});
            } else if(segment.isFinal && segment.intent.intent === 'create_transaction'){
                return createTransaction();
            } else if(segment.isFinal && segment.intent.intent === "cancel_transaction"){
                return setFormData(initialState);
            }

            segment.entities.forEach((e) => {
                const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`;
                switch(e.type){
                    case 'amount':
                        setFormData({...formData, amount: e.value});
                        break;
                    case 'category':
                        if(incomeCategories.map((iC) => iC.type).includes(category)){
                            setFormData({...formData, type:'Income', category});
                        }
                        else if(expenseCategories.map((iC) => iC.type).includes(category)){
                            setFormData({...formData, type:'Expense', category});
                        }
                        break;
                    case 'date':
                        setFormData({...formData, category: e.value}); 
                        break;
                    default:
                        break;
                }
                
            })

            if(segment.isFinal && formData.amount && formData.category && formData.type && formData.date){
                createTransaction();
            }
        }
    }, [segment, formData, createTransaction])

    // console.log(formData)

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;


  return (
    <div>
        <Grid conatiner spacing={2}>
            <CustomizedSnackbar open={open} setOpen={setOpen} />
            <Grid xs={12}>
                <Typography align="center" variant='subtitle2' gutterBottom>
                    {segment ? (
                        <>
                            {segment.words.map((w)=> w.value).join(" ")}
                        </>
                    ): null}
                </Typography>
            </Grid>
            <br/>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select  value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}> 
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select  value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                       {selectedCategories.map( (c) => <MenuItem key={c.type} value={c.type}> {c.type} </MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            </Grid> 
            <br/>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField className="textField" type="number" label="Amount" fullWidth value={formData.amount} onChange={(e)=> setFormData({...formData, amount: e.target.value})}/>
            </Grid>
            <Grid item xs={6}>
                <TextField className="textField" type="date" label="" fullWidth value={formData.date} onChange={(e)=> setFormData({...formData, date: formatDate(e.target.value)})}/>
            </Grid>
            </Grid>
            <br/>
            <Button className='button' variant='outlined' color="primary" fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
    </div>
  )
}

export default Form