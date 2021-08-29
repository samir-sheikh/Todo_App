import React, { useState } from 'react';
import { auth } from '../firebase';
import { useHistory} from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email , password)
      const result =  await auth.signInWithEmailAndPassword(email , password)
      alert("Login Sucessfull.....")
      history.push("/")
    }
     
       return (

        <div className="center container" style={{maxWidth : '400px'}}>
    <form onSubmit= {(e) => handleSubmit(e)}>
          <div className=" input-field" >
          <h3>Login Here......</h3>
          <input type="email" value={email} placeholder="Enter Your Mail" onChange= {(e) => setEmail(e.target.value)} />
          <input type="password" value={password} placeholder="Enter Your Password" onChange= {(e) => setPassword(e.target.value)} />

        </div>
        
        <button type="submit" className="btn red">Button</button>
        </form>
        </div>
    )
}

export default Login;