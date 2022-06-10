import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlices';
import pagination from './slices/paginationSlice';
import cart from './slices/cartSlice';
import pizza from './slices/pizzaSlice';
export const store = configureStore({
  reducer: {
     filter,
     pagination,
     cart,
     pizza 
  },
})