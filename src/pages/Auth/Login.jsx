import React, { useState, useEffect } from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login page</h1>
      <div>
        <form onSubmit>
          <input placeholder="email" type="email" name="email" autoComplete={false}  />
          <input placeholder="password" type="password" name="password" autoComplete={false}  />
          <input value="Submit" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
