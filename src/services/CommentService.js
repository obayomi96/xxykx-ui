import http from '../utils/http'

class CommentService {

  getComments = async () => {
    try {
      const response = await http.get('comments');
      if (response.status === 200) {
        const { comment } = response.data
        return comment
      }
    } catch(error) {
      return error
    }
  }

  createComment = async (comment, id) => {
    try {
      console.log('coment serv', comment)
      const response = await http.post('comments', {content: comment, uderId: id})
      console.log('sdr', response)
      if (response.status === 200) {
        const { data } = response.data
        return data
      }
    } catch (error) {
      return error
    }
  }
  
  updateComment = async (commentId, comment) => {
    try {
      const response = await http.patch(`comments/?comment_id=${commentId}`, comment)
      if (response.status === 200) {
        const { data } = response.data
        return data
      }
    } catch (error) {
      return error
    }
  }

  deleteComment = async (commentId) => {
    try {
      const response = await http.delete(`comments/?comment_id=${commentId}`)
      if (response.status === 200) {
        const { data } = response.data
        return data[0]
      }
    } catch(error) {
      return error
    }
  }

  replyToComment = async (comment, commentId) => {
    try {
      const response = await http.post(`comments/${commentId}/replies`, comment)
      if (response.status === 200) {
        const { data } = response.data
        return data
      }
    } catch (error) {
      return error
    }
  }

}

export default CommentService
