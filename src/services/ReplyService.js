import http from '../utils/http'

class ReplyService {

  replyToComment = (credentials) => {
    return new Promise((resolve, reject) => {
      try {
        http.post('brand/create', credentials)
        .then(({ data }) => {
          if (data.code === 200) {
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

export default ReplyService
