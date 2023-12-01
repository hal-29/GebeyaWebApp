import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   account: null,
   loading: false,
   error: null,
}
const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      signup: (state, action) => (state.account = action.payload),
      login: (state, action) => (state.account = action.payload),
      update: (state, action) => (state.account = action.payload),
      logout: state => (state.account = null),
   },
})

export const { login, logout, signup, update } = authSlice.actions

export default authSlice.reducer
