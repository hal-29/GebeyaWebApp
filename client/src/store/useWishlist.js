import { create } from 'zustand'

const useWishlist = create(set => ({
   items: [],
   setWishlist: items => set({ items }),
   addToWishlist: product =>
      set(state => ({
         items: state.items.concat(product),
      })),
   removeFromWishlist: id =>
      set(state => ({
         items: state.items.filter(item => item.id !== id),
      })),
   clearWishlist: () => set({ items: [] }),
   isInWishlist: id =>
      Boolean(useWishlist.getState().items.find(item => item.id === id)),
}))

export default useWishlist
