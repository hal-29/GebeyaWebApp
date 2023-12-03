import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'

const initialState = {
   account: null,
   loggedIn: false,
   loading: false,
   error: null,
}
const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      signup: (state, action) => {
         state.account = action.payload
      },
      login: (state, action) => {
         state.account = action.payload
      },
      update: (state, action) => {
         state.account = action.payload
      },
      logout: state => {
         state.account = null
      },
      startLoading: state => {
         state.loading = true
      },
      stopLoading: state => {
         state.loading = false
      },
      startError: (state, action) => {
         state.error = action.payload
      },
      stopError: state => {
         state.error = null
      },
   },
})

export const { login, logout, update } = authSlice.actions

export default authSlice.reducer

export const signup = credential => {
   return async function (dispatch, getStore) {
      try {
         dispatch({ type: 'auth/startLoading' })
         const response = await api.post('auth/signup', credential)

         // Assuming the response contains the account information
         dispatch(login(response.account)) // Assuming you have a login action to set the account

         console.log(response)
      } catch (error) {
         console.error(error)
         dispatch({ type: 'auth/startError', payload: error.message })
      } finally {
         dispatch({ type: 'auth/stopLoading' })
      }
   }
}
