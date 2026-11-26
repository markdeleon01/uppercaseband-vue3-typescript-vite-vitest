import axios from 'axios'

const apiClient = axios.create({
  baseURL: `/api`, // this is the base URL for all API calls.  The /api prefix is used to avoid conflicts with other routes in the app.  The /api prefix is also used to proxy API calls to the backend server in development mode (see vite.config.ts)
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000 // throw error if API call takes longer than 10 seconds
})

export default apiClient