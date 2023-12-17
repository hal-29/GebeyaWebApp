import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'

const initialState = {
   orders: [],
   loading: false,
}

const orderSlice = createSlice({
   name: 'order',
   initialState,
   reducers: {
      setOrders: (state, action) => {
         state.orders = action.payload
      },
      setLoading: (state, action) => {
         state.loading = action.payload
      },
   },
})
const { setOrders, setLoading } = orderSlice.actions
export default orderSlice.reducer

export function loadOrders() {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         const response = await api.get('order')
         dispatch(setOrders(response))
      } catch (error) {
         console.error(error)
      } finally {
         dispatch(setLoading(false))
      }
   }
}
