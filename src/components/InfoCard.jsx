import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style ={{textAlign : 'center', padding: '0 10%'}}>
        try saying: <br/>
        {isIncome ? 'Income ' : 'Expense '}
        {isIncome ? '₹100 ' : "₹50 "}
        {isIncome ? 'Business ' : 'House '}
        {isIncome ? 'Monday ' : 'Tuesday '}
    </div>
  )
}

export default InfoCard