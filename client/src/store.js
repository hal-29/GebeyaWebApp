import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import homeSlice from './features/dashboard/homeSlice'
import productSlice from './features/products/productSlice'
import cartSlice from './features/cart/cartSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice,
      home: homeSlice,
      product: productSlice,
      cart: cartSlice,
   },
})
