import axios from 'axios'

const axiosClient = axios.create({
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_KEY,
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    Prefer: 'count=exact',
  },
})

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API Error]', error?.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default axiosClient
