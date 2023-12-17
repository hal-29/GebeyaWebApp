import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import homeSlice from './features/dashboard/homeSlice'
import productSlice from './features/products/productSlice'
import cartSlice from './features/cart/cartSlice'
import wishlistSlice from './features/wishlists/wishlistSlice'
import searchSlice from './features/search/searchSlice'
import orderSlice from './features/orders/orderSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice,
      home: homeSlice,
      product: productSlice,
      cart: cartSlice,
      wishlist: wishlistSlice,
      search: searchSlice,
      order: orderSlice,
   },
})
