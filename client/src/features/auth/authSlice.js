import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'

const initialState = {
   account: null,
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

export const { update } = authSlice.actions

export default authSlice.reducer

export const login = credential => {
   return async function (dispatch, getStore) {
      try {
         dispatch({ type: 'auth/startLoading' })
         console.log(credential)
         const response = await api.post('auth/login', credential)
         dispatch({ type: 'auth/login', payload: response.account })
      } catch (error) {
         console.log(error)
         dispatch({ type: 'auth/startError', payload: error.message })
      } finally {
         dispatch({ type: 'auth/stopLoading' })
      }
   }
}

export const logout = () => {
   return async function (dispatch, getStore) {
      await api.get('auth/logout')
      dispatch({ type: 'auth/logout' })
   }
}

export const signup = credential => {
   return async function (dispatch, getStore) {
      try {
         dispatch({ type: 'auth/startLoading' })
         const response = await api.post('auth/signup', credential)

         // Assuming the response contains the account information
         dispatch({ type: 'auth/signup', payload: response.account }) // Assuming you have a login action to set the account

         console.log(response)
      } catch (error) {
         console.error(error)
         dispatch({ type: 'auth/startError', payload: error.message })
      } finally {
         dispatch({ type: 'auth/stopLoading' })
      }
   }
}
