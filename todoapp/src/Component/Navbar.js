import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './../firebase';
import { useHistory } from 'react-router-dom'

function Navbar({user}) {

  const history = useHistory()

  return (
    <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Todo List</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">

      {
        user?
        <li>
        <button className="btn blue" onClick = {() =>{
            auth.signOut()
            history.push('/login')
        }}>Logout</button>
      </li>
      :
        <>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/Ragister">Ragister</Link></li>
        </>
    
      }

      </ul>
    </div>
  </nav>
  )
}

export default Navbar
