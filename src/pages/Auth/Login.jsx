import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions/authActions";

const Login = ({ login, history, isLoading }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = values;
    login(
      {
        email,
        password,
      },
      history
    );
  };

  return (
    <div>
      <h1>Login page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="email"
            type="email"
            name="email"
            value={values.email}
          />
          <input
            onChange={handleChange}
            placeholder="password"
            type="password"
            name="password"
            value={values.password}
          />
          <input
            value={`${isLoading ? "Loading..." : "Submit"}`}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userObject, history) => dispatch(login(userObject, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
