import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import navSlice from './navSlice'

export const store = configureStore({
   reducer: {
      navbar: navSlice,
      auth: authSlice,
   },
})
