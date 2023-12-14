import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'

const initialState = {
   products: {},
   items: {},
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
      setProductItem: (state, action) => {
         state.items[action.payload.id] = action.payload.item
      },
   },
})

const { setProducts, setLoading, setProductItem } = productSlice.actions
export default productSlice.reducer

export function loadProduct(id) {
   return async (dispatch, getStore) => {
      if (getStore().product.items[id]) return
      try {
         dispatch(setLoading(true))
         const response = await api.get(`product/${id}`)
         response.id && dispatch(setProductItem({ id, item: response }))
      } catch (error) {
         console.error(error)
      } finally {
         dispatch(setLoading(false))
      }
   }
}

export function fetchProducts(query) {
   return async (dispatch, getStore) => {
      if (getStore().product.products[query]) return
      try {
         dispatch(setLoading(true))
         const response = await api.get(`product${query}&limit=20`)
         response.length && dispatch(setProducts({ query, products: response }))
      } catch (error) {
         console.error(error)
      } finally {
         dispatch(setLoading(false))
      }
   }
}
