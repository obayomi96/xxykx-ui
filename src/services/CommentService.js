import http from '../utils/http'

class CommentService {

  getBrands = async () => {
    try {
      const response = await http.get('brand/read_all')
      if (response.data.code === 200) {
        const { data } = response.data
        return data
      }
    } catch(error) {
      return error
    }
  }

  addBrand = (credentials) => {
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
  
  updateBrand = (credentials) => {
    return new Promise((resolve, reject) => {
      try {
        http.post('brand/update', credentials)
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

  getBrandById = async (id) => {
    try {
      const response = await http.get(`brand/read/?_id=${id}`)
      if (response.data.code === 200) {
        const { data } = response.data
        return data[0]
      }
    } catch(error) {
      return error
    }
  }

  getBrandByStatus = async (status) => {
    try {
      const response = await http.post('brand/read_by_status', status)
      if (response.data.code === 200) {
        const { data } = response.data
        return data
      }
    } catch (error) {
      return error
    }
  }

}

export default CommentService
