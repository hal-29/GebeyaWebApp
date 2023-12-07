import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'

const initialState = {
   products: {},
   loading: false,
}

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
      setProducts: (state, action) => {
         state.products[action.payload.query] = action.payload.products
      },
      setLoading: (state, action) => {
         state.loading = action.payload
      },
   },
})

export const { setProducts, setLoading } = productSlice.actions
export default productSlice.reducer

export function fetchProducts(query) {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         const response = await api.get(`product${query}`)
         response.length && dispatch(setProducts(response))
      } catch (error) {
         console.error(error)
      } finally {
         dispatch(setLoading(false))
      }
   }
}
