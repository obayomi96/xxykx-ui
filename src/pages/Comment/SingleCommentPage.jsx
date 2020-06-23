import React, { useState, useEffect } from 'react';
import { withRouter, } from "react-router-dom";
import { connect } from 'react-redux';
import  { 
  getOneComment,
  updateComment,
  deleteComment,
 } from '../../store/actions/commentActions';
import authStore from '../../utils/auth'

const SingleCommentCard = ({isLoading, inLoading, getOneComment, singleComment, deleteComment, updateComment, match}) => {
  const [values, setValues] = useState({
    content: ''
  });
  const [comment, setComment] = useState({});
  useEffect(() => {
    async function loadData() {
      const { comment_id } = match.params;
      await getOneComment(comment_id);
    }
    if (singleComment) {
      setComment(singleComment);
    }
    loadData();
  }, [singleComment, getOneComment, match])

  const handleChange = (event) => {
    event.persist()
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  return (
    <>
    {
      isLoading ?
      (
        <div>
          <h2>LOADING...</h2>
        </div>
      ) :
      (
        <>
        {
          comment && comment.user ?
          (
            <div style={{margin: '5px', padding: '5px', display: 'flex', justifyContent: 'space-evenly'}}>
              <h1>A Single comment page</h1>
              <div style={{margin: '5px', padding: '5px', border: '1px solid #ddd', height: 'auto', boxSizing: 'border-box'}} key={comment.id}>
                <div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                      <p>Comment : <b>{comment.content}</b></p>
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                        <small>Author name : {comment.user && comment.user.name}</small>
                        <small>Author email : {comment.user && comment.user.email}</small>
                      </div>
                    </div>
                    {
                      authStore.getToken() && authStore.getToken() === comment.userId ?
                      (
                      <div>
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                      ): ''
                    }
                  </div>
                  <hr/>
                  <b>REPLIES</b>
                  { 
                    comment && comment.replies.map((reply, index) => {
                      return (
                        <div key={reply.id}>
                          <p><span>{index + 1}. </span>{reply.content}</p>
                        </div>
                      )
                    })
                  }
              </div>
              {
                authStore.getToken() ?
                (
                  <div>
                    <form onSubmit>
                      <input type="text" name="content" onChange={handleChange} value={values.content} placeholder="Reply to comment" />
                      <button type="submit">{inLoading ? 'Laoding...' : 'Reply'}</button>
                    </form>
                  </div>
                ) : ''
              }
            </div>
            </div>
          ): ""
        }
        </>
      )
    }
    </>
  );
}

const mapStateToProps = state => ({
  isLoading: state.comment.isLoading,
  inLoading: state.comment.inLoading,
  singleComment: state.comment.singleComment,
});

const mapDispatchToProps = (dispatch) => ({
  getOneComment: (commentId) => dispatch(getOneComment(commentId)),
  updateComment: (comment, userId) => dispatch(updateComment(comment, userId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleCommentCard));
