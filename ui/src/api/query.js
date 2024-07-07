import api from './axios'
import { endpoints } from './endpoints'

const query = {
   GET_TRENDING: {
      queryKey: ['trending', 'products'],
      queryFn: async () => {
         const { data } = await api.get(endpoints.getTrendings())
         return data
      },
   },
   GET_SPECIAL: {
      queryKey: ['special', 'products'],
      queryFn: async () => {
         const { data } = await api.get(endpoints.getSpecials())
         return data
      },
   },
   GET_CATEGORIES: {
      queryKey: ['categories'],
      queryFn: async () => {
         const { data } = await api.get(endpoints.getCategories())
         return data
      },
   },
}

export default query
