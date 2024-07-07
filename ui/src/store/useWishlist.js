import { create } from 'zustand'
import { endpoints } from '../api/endpoints'
import api from '../api/axios'

const useWishlist = create(set => ({
   wishlists: [],
   fetchWishlists: async () => {
      const res = await api.get(endpoints.getAllWishlists())
      if (!res.data) return
      set({ wishlists: res.data })
   },
   addToWishlist: async productId => {
      const res = await api.post(endpoints.createWishlist(), { productId })
      if (!res.data) return
      set(state => ({ wishlists: [...state.wishlists, res.data] }))
   },
   removeFromWishlist: async productId => {
      await api.delete(endpoints.deleteWishlist(productId))
      set(state => ({
         wishlists: state.wishlists.filter(product => product.id !== productId),
      }))
   },
   removeAllWishlist: async () => {
      await api.delete(endpoints.deleteAllWishList())
      set({ wishlists: [] })
   },
}))

export default useWishlist
