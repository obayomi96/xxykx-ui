import http, { setToken } from '../utils/http'

class AuthService {

  userLogin = (credentials) => {
    return new Promise((resolve, reject) => {
      try {
        http.post('login', credentials)
        .then(({ data }) => {
          console.log(data)
          if (data.code === 200) {
            const { token } = data.data
            localStorage.setItem('user_token', token)
            setToken(token)
            resolve(data.data)
            return data.data
          } else {
            reject({message: data.message})
          }
        })
      } catch (error) {
        reject({message: 'An unexpected error has occured'})
        return error.message
      }
    })
  }

}

export default AuthService