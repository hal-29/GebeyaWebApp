import { create } from 'zustand'
import api from '../api/axios'
import { endpoints } from '../api/endpoints'

const useAuth = create(set => ({
   user: null,
   login: async data => {
      const res = await api.post(endpoints.login(), data)
      console.log(res.data)
      set({ user: res })
   },
   register: async data => {
      const res = await api.post(endpoints.register(), data)
      console.log(res)
      set({ user: res })
   },
   logout: () => set({ user: null }),
}))

export default useAuth
