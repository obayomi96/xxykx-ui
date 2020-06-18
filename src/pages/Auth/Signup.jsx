import React, { useState, useEffect } from 'react';

const Signup = () => {
  return (
    <div>
      <h1>Signup page</h1>
      <div>
        <form onSubmit>
          <input placeholder="name" type="text" name="name" autoComplete={false} />
          <input placeholder="email" type="email" name="email" autoComplete={false} />
          <input placeholder="password" type="password" name="password" />
          <input value="Submit" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
