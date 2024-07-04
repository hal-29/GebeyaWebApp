import { create } from 'zustand'

const useCart = create(set => ({
   items: [],
   addToCart: product =>
      set(state => ({
         items: state.items
            .filter(item => item.product.id !== product.id)
            .concat({ product, quantity: 1 }),
      })),
   removeFromCart: id =>
      set(state => ({
         items: state.items.filter(item => item.product.id !== id),
      })),
   setQuantity: (id, quantity) =>
      set(state => {
         if (quantity <= 0) return state
         return {
            items: state.items.map(item =>
               item.product.id === id
                  ? { product: item.product, quantity }
                  : item
            ),
         }
      }),
   clearCart: () => set({ items: [] }),
   isInCart: id =>
      Boolean(useCart.getState().items.find(item => item.product.id === id)),
}))

export default useCart
