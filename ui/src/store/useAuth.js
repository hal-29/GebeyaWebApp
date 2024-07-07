import { create } from 'zustand'
import api from '../api/axios'
import { endpoints } from '../api/endpoints'

const useAuth = create(set => ({
   user: null,
   login: async data => {
      const res = await api.post(endpoints.login(), data)
      if (res.data) {
         sessionStorage.setItem('token', res.token)
         set({ user: res.data })
      }
      return res
   },
   register: async data => {
      const res = await api.post(endpoints.register(), data)
      if (res.data) {
         sessionStorage.setItem('token', res.token)
         set({ user: res.data })
      }
      return res
   },
   logout: async () => {
      await api.post(endpoints.logout())
      sessionStorage.removeItem('token')
      set({ user: null })
   },
   verify: async () => {
      const res = await api.post(endpoints.verify())
      if (res.data) {
         sessionStorage.setItem('token', res.token)
         set({ user: res.data })
      }
      return res
   },
}))

export default useAuth
