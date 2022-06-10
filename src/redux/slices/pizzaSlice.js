import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchPizzas = createAsyncThunk(
   'pizza/fetchPizzaStatus',
   async (params) => {
      const { 
         category,
         sort,
         searchProduct,
         page} = params;
      const { data } = await axios.get(`http://localhost:3001/pizzas?${page}${category}${sort}${searchProduct}`)
      return data;
   }
)


const initialState = {
   pizza: [],
   status: 'loading', //loading \ succes \ error
}

export const pizzaSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      setPizza(state, action) {
         state.pizza = action.payload;
      }
   },
   extraReducers: {
      [fetchPizzas.pending]: (state) => {
         state.status = 'loading';
         state.pizza = []
      },
      [fetchPizzas.fulfilled]: (state, action) => {
         
         state.pizza = action.payload;
         state.status = 'succes';
      },
      [fetchPizzas.rejected]: (state) => {
         state.status = 'error';
         state.pizza = []
      },
   }
})


export const { setPizza } = pizzaSlice.actions

export default pizzaSlice.reducer