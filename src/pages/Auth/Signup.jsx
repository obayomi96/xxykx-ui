import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  { signup } from '../../store/actions/authActions';

const Signup = ({signup, isLoading, history}) => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    event.persist()
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { name, email, password } = values;
    await signup({
      name,
      email,
      password,
    }, history)
  }

  return (
    <div>
      <h1>Signup page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder="name" type="text" name="name" autoComplete={false} />
          <input onChange={handleChange} placeholder="email" type="email" name="email" autoComplete={false} />
          <input onChange={handleChange} placeholder="password" type="password" name="password" />
          <input value={`${isLoading ? 'Loading...' : 'Submit'}`}type="submit" />
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (userObject, history) => dispatch(signup(userObject, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));
