import { setToken } from './http';

export default class authStore {
  static confirmAuth() {
    if (localStorage.user_token) {
      setToken(localStorage.user_token)
    }
  }

  static getToken() {
    return localStorage.user_token
  }
}
