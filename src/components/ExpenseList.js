import React from 'react'
import { useSelector } from 'react-redux'
import { deleteExpense } from './expenseSlice'
import { useDispatch } from 'react-redux'


const ExpenseList = () => {
    const dispatch = useDispatch()
    const expenses = useSelector((state) => state.expense.expenses)
    console.log(expenses)
  return (
    <>
    
   <div style={{display:"flex", justifyContent:"center"}}>
   {
        expenses.map((expense, index) => {
            return (
                <div key={index}
                className='expense-list'>
                    <p>{expense.expenseItem}</p>
                    <p>{expense.amount}</p>
                    <p>{expense.type}</p>
        
                    <button onClick={() => dispatch(deleteExpense(expense))}
                        style={{ marginTop: "20px", padding: "10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px" }}
                    >
                        Delete
                    </button>
                </div>
            )
        })
    }
   </div>
    </>
  )
}

export default ExpenseList
