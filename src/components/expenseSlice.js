import { createSlice } from '@reduxjs/toolkit'

const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    expenses: [],
    totalExpense: 0,
    totalIncome: 0
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);

      if (action.payload.type === 'income') {
        state.totalIncome += action.payload.amount;
      } else {
        state.totalExpense += action.payload.amount;
      }
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter((expense) => expense.id !== action.payload.id);
    
    }
  }
})

export const { addExpense, deleteExpense } = expenseSlice.actions
export default expenseSlice.reducer