import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   products: [],
   fechedUpto: 1,
}

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
      setProducts: (state, action) => {
         state.products = action.payload
      },
   },
})

export const { setProducts } = productSlice.actions
export default productSlice.reducer
