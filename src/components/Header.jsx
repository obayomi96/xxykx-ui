import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import authStore from '../utils/auth';

const Header = ({history}) => {

  const logout = () => {
    localStorage.clear()
    history.push('/login')
  }
  
  return (
    <>
    {
      authStore.getToken() ?
      (
        <div style={{width: '100%'}} className="App-header">
          <div>LOGGED IN USER</div>
          <button onClick={logout}>Logout</button>
        </div>
      ) :
      (
        <div  style={{width: '100%', display: 'inline'}} className="App-header">
          <div>
            <div>
              <h2>Welcome</h2>
            </div>
            <div>
              <h5><Link to='/'>Login</Link></h5>
              <h5><Link to='/signup'>Signup</Link></h5>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default withRouter(Header);
