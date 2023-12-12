import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'
import { resetWishlist } from '../wishlists/wishlistSlice'
import { resetCart } from '../cart/cartSlice'

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
         state = initialState
      },
      setLoading: (state, action) => {
         state.loading = action.payload
      },
      setError: (state, action) => {
         state.error = action.payload
      },
   },
})

export const { signup, login, update, logout, setLoading, setError } =
   authSlice.actions

export default authSlice.reducer

export function authenticate() {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         const response = await api.get('auth')
         dispatch(login(response.account))
      } catch (error) {
         dispatch(setError(error.message))
      } finally {
         dispatch(setLoading(false))
      }
   }
}

export function loginUser(credential) {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         const response = await api.post('auth/login', credential)
         dispatch(login(response.account))
      } catch (error) {
         dispatch(setError(error.message))
      } finally {
         dispatch(setLoading(false))
      }
   }
}

export function logoutUser() {
   return async dispatch => {
      await api.get('auth/logout')
      dispatch(resetCart())
      dispatch(resetWishlist())
      dispatch(logout())
   }
}

export function signupUser(credential) {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         const response = await api.post('auth/signup', credential)
         dispatch(signup(response.account))
      } catch (error) {
         dispatch(setError(error.message))
      } finally {
         dispatch(setLoading(false))
      }
   }
}
