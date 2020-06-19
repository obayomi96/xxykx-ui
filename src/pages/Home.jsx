import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/comments">Comments page</Link>
    </div>
  );
}

export default withRouter(Home);
