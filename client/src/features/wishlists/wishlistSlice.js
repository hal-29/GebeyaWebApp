import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'

const initialState = {
   wishlists: [],
   loading: false,
}
const wishlistSlice = createSlice({
   name: 'wishlist',
   initialState,
   reducers: {
      resetState: state => {
         state = initialState
      },
      setLoading: (state, action) => {
         state.loading = action.payload
      },
      setWishlists: (state, action) => {
         state.wishlists = action.payload
      },
      newWishlist: (state, action) => {
         state.wishlists.push(action.payload)
      },
      deleteWishlist: (state, action) => {
         state.wishlists = state.wishlists.filter(
            wl => wl.id !== action.payload
         )
      },
   },
})

export const {
   setWishlists,
   newWishlist,
   deleteWishlist,
   setLoading,
   resetState: resetWishlist,
} = wishlistSlice.actions
export default wishlistSlice.reducer

export function fetchWishlists() {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         const response = await api.get('wishlist')
         dispatch(setWishlists(response))
      } catch (error) {
         console.error(error)
      } finally {
         dispatch(setLoading(false))
      }
   }
}

export function addWishlist(product) {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         await api.post('wishlist', { productId: product.id })
         dispatch(
            newWishlist({
               id: product.id,
               name: product.name,
               price: product.price,
            })
         )
      } catch (error) {
         console.error(error)
      } finally {
         dispatch(setLoading(false))
      }
   }
}

export function removeWishlist(product) {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         await api.delete(`wishlist/${product.id}`)
         dispatch(deleteWishlist(product.id))
      } catch (error) {
         console.error(error)
      } finally {
         dispatch(setLoading(false))
      }
   }
}
