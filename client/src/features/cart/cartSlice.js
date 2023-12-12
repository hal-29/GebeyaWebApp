import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   cartItems: [],
}
const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      reset: state => {
         state = initialState
      },
      addToCart: (state, action) => {
         state.cartItems.find(item => item.id === action.payload.id) ||
            state.cartItems.push({ ...action.payload, count: 1 })
      },
      removeCartItem: (state, action) => {
         state.cartItems = state.cartItems.filter(
            item => item.id !== action.payload
         )
      },
      setCartCount: (state, action) => {
         state.cartItems.forEach(item => {
            if (item.id === action.payload.id) item.count = action.payload.count
         })
      },
   },
})

export const {
   addToCart,
   removeCartItem,
   setCartCount,
   reset: resetCart,
} = cartSlice.actions
export default cartSlice.reducer
