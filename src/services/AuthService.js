import http, { setToken } from '../utils/http'

class AuthService {

  userLogin = async (credentials) => {
    try {
      const response = await http.post('login', { user: { ...credentials }})
      if (response.status === 200) {
        const { user } = response.data;
        localStorage.setItem('user_token', user.token)
        setToken(user.token)
        return user
      }
    } catch(error) {
      return error
    }
  }

  userSignup = async (credentials) => {
    try {
      const response = await http.post('register', { user: { ...credentials }})
      if (response.status === 201) {
        const { user } = response.data;
        localStorage.setItem('user_token', user.token)
        setToken(user.token)
        return user
      }
    } catch(error) {
      return error
    }
  }

}

export default AuthService