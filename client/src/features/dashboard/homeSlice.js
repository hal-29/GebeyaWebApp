import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'

const initialState = {
   carousels: [],
   phones: [],
   loading: false,
}

const homeSlice = createSlice({
   name: 'home',
   initialState,
   reducers: {
      loadCarousels: (state, action) => {
         state.carousels = action.payload
      },
      loadPhones: (state, action) => {
         state.phones = action.payload
      },
      setLoading: (state, action) => {
         state.loading = !!action.payload
      },
   },
})

export const { loadCarousels, loadPhones, setLoading } = homeSlice.actions
export default homeSlice.reducer

export function fetchPhones(limit) {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         const response = await api.get(`product/phones?limit=${limit}`)
         dispatch(loadPhones(response))
      } catch (error) {
         console.error(error)
      } finally {
         dispatch(setLoading(false))
      }
   }
}
