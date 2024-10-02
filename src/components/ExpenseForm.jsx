
import React from 'react'
import { addExpense } from './expenseSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const ExpenseForm = () => {

    const dispatch = useDispatch()
    const [expenseItem, setExpenseItem] = useState('')
    const [amount, setAmount] = useState('')
    const [budgetType, setBudgetType] = useState('')

    const handleAddExpense = () => {
        let expense = {
        id: Math.random(),
            expenseItem: expenseItem,
            amount: parseFloat(amount),
            type: budgetType
        }  
        dispatch(addExpense(expense)); 
    }


  return (
    <div className='expense-form '>
    <input
      type="text"
      placeholder="Expense item"
      onChange={(e) => setExpenseItem(e.target.value)}
    className='expense-form input'
    />
    <input
      type="number"
      placeholder="Amount"
      onChange={(e) => setAmount(e.target.value)}
    className='expense-form input'
    />
    <select 
    onChange={(e) => setBudgetType(e.target.value)}
  className='expense-form input'>
      <option value="income">income</option>
      <option value="expense">expense</option>
    </select>
    <button 
    onClick={handleAddExpense}
    style={{ marginTop: "20px", padding: "10px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px" }}
  >
    Add expense
  </button>
  </div>
  )
}

export default ExpenseForm
