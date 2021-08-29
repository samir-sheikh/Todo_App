import { useEffect, useState } from 'react';
import { auth } from './firebase'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter } from 'react-router-dom';
import { Route , Switch } from 'react-router-dom'
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Todo from './Component/Todo';
import Ragister from './Component/Ragister';

function App() {

  const [user , setuser] = useState(null);

  useEffect( () => {

   const unsubscribe= auth.onAuthStateChanged(user =>{
      if(user) setuser(user)
      else setuser(null)
    })
return () => {
  unsubscribe()
}
  } , [])


  return (
    <>
    <BrowserRouter>
    <Navbar user ={user} />
    <Switch>
      <Route exact path= "/">
      <Todo user ={user} />
      </Route>

      <Route path= "/login">
      <Login />
      </Route>

      <Route path= "/Ragister">
      <Ragister />
      </Route>
 </Switch>

  </BrowserRouter>
    </>
  );
}

export default App;
