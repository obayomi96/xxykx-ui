import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const setToken = (token) => {
  if (!token) {
    delete http.defaults.headers.common.Authorization
  }
  http.defaults.headers['user_token'] = token
}

export default http
