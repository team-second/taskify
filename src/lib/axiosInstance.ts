import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/7-2',
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
})

api.interceptors.request.use(
  config => {
    function getCookie(name: string) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)

      if (parts) {
        return parts[1].split(';').shift()
      }
    }

    const token = getCookie('Authorization')
    console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default api
