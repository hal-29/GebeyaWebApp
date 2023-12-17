import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'

const initialState = {
   results: [],
   loading: false,
   count: null,
}
const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      setProducts: (state, action) => {
         state.results = action.payload.products
         state.count = action.payload.count
      },
      setLoading: (state, action) => {
         state.loading = action.payload
      },
   },
})

const { setProducts, setLoading } = searchSlice.actions
export default searchSlice.reducer

export function fetchSearchResults(query) {
   return async dispatch => {
      try {
         setLoading(true)
         const response = await api.get(`product/search${query}&limit?10`)
         dispatch(
            setProducts({ count: response.count, products: response.products })
         )
      } catch (error) {
         console.error(error)
      } finally {
         setLoading(false)
      }
   }
}
