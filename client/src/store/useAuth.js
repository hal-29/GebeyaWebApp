import { create } from 'zustand'

const useAuth = create(set => ({
   user: null,
   login: user => set({ user }),
   logout: () => set({ user: null }),
}))

export default useAuth
