import { createSlice } from '@reduxjs/toolkit'

const initialState = { isNavOpened: false }

const navSlice = createSlice({
   name: 'navbar',
   initialState,
   reducers: {
      openNav: state => {
         state.isNavOpened = true
      },
      closeNav: state => {
         state.isNavOpened = false
      },
   },
})

export const { openNav, closeNav } = navSlice.actions
export default navSlice.reducer
