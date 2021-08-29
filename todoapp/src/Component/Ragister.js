import React, { useState } from 'react';
import { auth } from '../firebase';
import { useHistory} from 'react-router-dom'

function Ragister() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email , password);
        try{
            const result =  await auth.createUserWithEmailAndPassword(email , password)
              alert("Ragister Sucessfull.....")
              history.push("/")
        }catch(err) {
            alert("something went Rong")
        }
    }
     
       return (
        <div className="center container" style={{maxWidth : '400px'}}>
    <form onSubmit= {(e) => handleSubmit(e)}>
          <div className="input-field">
          <h3>Ragister Here......</h3>
          <input type="email" value={email} placeholder="Enter Your Mail" onChange= {(e) => setEmail(e.target.value)} />
          <input type="password" value={password} placeholder="Enter Your Password" onChange= {(e) => setPassword(e.target.value)} />

        </div>
        
        <button type="submit" className="btn green">Button</button>
        </form>
        </div>
    )
}

export default Ragister;