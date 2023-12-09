import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   cartItems: [],
}
const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action) => {
         state.cartItems.find(item => item.id === action.payload.id) ||
            state.cartItems.push({ ...action.payload, count: 1 })
      },
      removeCartItem: (state, action) => {
         state.cartItems = state.cartItems.filter(
            item => item.id !== action.payload
         )
      },
      incrementCartCount: (state, action) => {
         state.cartItems = state.cartItems.map(item =>
            item.id === action.payload ? item.count++ : item
         )
      },
      decrementCartCount: (state, action) => {
         state.cartItems = state.cartItems.map(item => {
            item.id === action.payload && item.count > 1 ? item.count-- : item
         })
      },
   },
})

export const {
   addToCart,
   removeCartItem,
   incrementCartCount,
   decrementCartCount,
} = cartSlice.actions
export default cartSlice.reducer
