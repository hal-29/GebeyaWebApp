import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   account: null,
}
const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, action) => (state.account = action.payload),
      logout: state => (state.account = null),
   },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
