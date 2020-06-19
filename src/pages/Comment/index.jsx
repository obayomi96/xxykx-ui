import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import  { 
  getComments,
  createComment,
  updateComment,
  deleteComment,
  replyToComment,
 } from '../../store/actions/commentActions';
import authStore from '../../utils/auth'

const Comments = ({getComments, comments, replyToComment, isLoading}) => {
  const [commentsList, setCommentsList] = useState([])
  const [values, setValues] = useState({
    reply: '',
    comment: '',
  })
  useEffect(() => {
    async function loadData() {
      await getComments();
    }
    if (comments) {
      setCommentsList(comments)
    }
    loadData()
  }, [comments])


  const handleChange = (event) => {
    event.persist()
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const addReply = async (event) => {
    event.preventDefault()
    replyToComment({
      content: values.reply,
    }, event.target.id)
  }

  return (
    <>
    {
      !isLoading ?
      (
        <div>
          <h1>Comments page</h1>
          <h2>LOADING...</h2>
        </div>
      ) :
      (
        <div style={{margin: '5px', padding: '5px', display: 'flex', justifyContent: 'space-evenly'}}>
          <h1>Comments page</h1>
          <div>
            {
              commentsList && commentsList.map((comment) => {
                return (
                  <div style={{margin: '5px', padding: '5px', border: '1px solid #ddd', height: 'auto', boxSizing: 'border-box'}} key={comment.id}>
                    <div>
                      <p>Comment : <b>{comment.content}</b></p>
                      <p>Author name : {comment.user && comment.user.name}</p>
                      <p>Author email : {comment.user && comment.user.email}</p>
                      <hr/>
                      <b>REPLIES</b>
                      {
                        authStore.getToken() ?
                        (
                          <div>
                            <form onSubmit={addReply}>
                              <input type="text" name="reply" id={comment.id} onChange={handleChange} value={values.reply} placeholder="Reply to comment" /><button type="submit">Reply</button>
                            </form>
                          </div>
                        ) : ''
                      }
                      {
                        comment && comment.replies.map((reply) => {
                          return (
                            <div key={reply.id}>
                              <p>{reply.content}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      )
    }
    </>
  );
}

const mapStateToProps = state => ({
  isLoading: state.comment.isLoading,
  comments: state.comment.comments,
});

const mapDispatchToProps = (dispatch) => ({
  getComments: () => dispatch(getComments()),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (commentId, comment) => dispatch(updateComment(commentId, comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  replyToComment: (commentId, comment) => dispatch(replyToComment(commentId, comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
