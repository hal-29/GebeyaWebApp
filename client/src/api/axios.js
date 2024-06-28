import axios from 'axios'

const instance = axios.create({
   timeout: 1000,
   headers: {
      'Content-Type': 'application/json',
   },
   withCredentials: true,
})

const defaultConfig = {
   headers: {
      'Content-Type': 'application/json',
   },
}

const api = {
   get: (url, config) =>
      instance.get(url, Object.assign({}, defaultConfig, config)),
   post: (url, data, config) =>
      instance.post(url, data, Object.assign({}, defaultConfig, config)),
   put: (url, data, config) =>
      instance.put(url, data, Object.assign({}, defaultConfig, config)),
   delete: (url, config) =>
      instance.delete(url, Object.assign({}, defaultConfig, config)),
}

export default api
