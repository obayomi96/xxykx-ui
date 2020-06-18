import React from 'react';
import { Link } from 'react-router-dom';
import authStore from '../utils/auth';

const Header = () => {
  return (
    <>
    {
      authStore.getToken() ?
      (
        <div className="App-header">
          <div style={{dsiplay: 'flex', alignItems: "center", justifyContent: 'space-between'}}>
            <h2>Welcome</h2>
              <h5><Link to='/'>Login</Link></h5>
              <h5><Link to='/signup'>Signup</Link></h5>
            </div>
        </div>
      ) :
      (
        <div className="App-header">
          <div>
          <div div>Comments React app</div>
          <div>COMMENTS LIST</div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default Header;
