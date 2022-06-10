import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sortActive:{ 'name': 'популярности', 'sortProperty': 'rating' },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action){
       state.categoryId = action.payload;
    },
    setSortActive(state, action){
      state.sortActive = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryId,setSortActive } = filterSlice.actions

export default filterSlice.reducer