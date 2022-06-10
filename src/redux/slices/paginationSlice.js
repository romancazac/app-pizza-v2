import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   paginationPage: 1,
}

export const paginationSlice = createSlice({
   name:'pagination', 
   initialState,
   reducers:{
      setPaginationPage(state, action){
         state.paginationPage = action.payload;
      } 
   }
})
export const { setPaginationPage } = paginationSlice.actions

export default paginationSlice.reducer