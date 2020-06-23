import React, { useState, useEffect } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import  { 
  getComments,
  createComment,
  deleteComment,
 } from '../../store/actions/commentActions';
import authStore from '../../utils/auth'

const Comments = ({getComments, comments, inLoading, isLoading}) => {

  const [commentsList, setCommentsList] = useState([])
  const [values, setValues] = useState({
    content: '',
  })
  
  useEffect(() => {
    async function loadData() {
      await getComments();
    }
    if (comments) {
      setCommentsList(comments)
    }
    loadData()
  }, [comments, getComments])

  const handleChange = (event) => {
    event.persist()
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const addComment = async (event) => {
    event.preventDefault();
    console.log('val', values.content)
    // const { content } = values;
    // await createComment(content)
  }

  return (
    <>
    {
      !isLoading ?
      (
        <div>
          <h2>LOADING...</h2>
        </div>
      ) :
      (
        <div style={{margin: '5px', padding: '5px', display: 'flex', justifyContent: 'space-evenly'}}>
          <h1>Comments page</h1>
          {
            authStore.getToken() ?
            (
              <div>
                <form onSubmit={addComment}>
                  <input type="text" name="content" onChange={handleChange} value={values.content} placeholder="Add comment" />
                  <button type="submit">{inLoading ? 'Laoding...' : 'Send'}</button>
                </form>
              </div>
            ) : ''
          }
          <div>
            {
              commentsList && commentsList.map((comment) => {
                return (
                  <div style={{margin: '5px', padding: '5px', border: '1px solid #ddd', height: 'auto', boxSizing: 'border-box'}} key={comment.id}>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{display: 'block'}}>
                          <p>Comment : <b>{comment.content}</b></p>
                          <div style={{display: 'flex', flexDirection: 'column'}}>
                            <small>Author name : {comment.user && comment.user.name}</small>
                            <small>Author email : {comment.user && comment.user.email}</small>
                          </div>
                        </div>
                        <div>
                          <Link to={`/comments/${comment.id}`}>
                            <button>View</button>
                          </Link>
                        </div>
                      </div>
                      <hr/>
                      <b>REPLIES</b>
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
  inLoading: state.comment.inLoading,
  comments: state.comment.comments,
});

const mapDispatchToProps = (dispatch) => ({
  getComments: () => dispatch(getComments()),
  createComment: (comment, userId) => dispatch(createComment(comment, userId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Comments));
