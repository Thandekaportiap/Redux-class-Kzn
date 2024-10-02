import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from './components/expenseSlice'

export default configureStore({
  reducer: {
    expense: expenseReducer
  }
})