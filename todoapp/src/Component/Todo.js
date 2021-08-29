import React, { useEffect, useState } from 'react';
import {db} from '../firebase';
import {useHistory } from 'react-router-dom';

function Todo({user}) {
    const [text , settext] = useState('');
    const [myTodos , setmyTodos] = useState([]);
    const history = useHistory()

    let unSubscribe = () => {}
    useEffect( () =>{

        if(user){
            const docRef = db.collection('todos').doc(user.uid)
            unSubscribe =  docRef.onSnapshot(docsnap =>{
                if(docsnap.exists){
                    console.log(docsnap.data().todos)
                    setmyTodos(docsnap.data().todos)
                }else{
                    console.log("There No docs");
                }
            })

        }else{
            history.push("/login")
        }

    
        return () => {
            unSubscribe()
        }

    },[])


    const addTodo = () => {
        db.collection('todos').doc(user.uid).set({
            todos : [...myTodos , text]
        })
    }

    const deleteTodo = (deleteTodo) => {
        const docRef = db.collection('todos').doc(user.uid)
        docRef.get().then(docsnap => {
            const result = docsnap.data().todos.filter(todo => todo != deleteTodo)
            docRef.update({
                todos:result
            })
        })
    }

   

    return (
        <div className="input-field container" style={{maxWidth : '600px'}}>
        <div >
            
          <h3>Add Todos here</h3>
          <input type="text" value={text} placeholder="Enter Your Todo" onChange= {(e) => settext(e.target.value)} />
         
        </div>
        
        <button className='btn red' onClick={ () => addTodo()}> Add Todo</button>

             <ul className="collection">
                {myTodos.map( todo => {
                   return  <li className="collection-item" key={todo}>{todo}
                    <i className="material-icons right" onClick={() => deleteTodo(todo)}>delete</i>
                   </li>
                })}
                
           </ul>
        </div>
    )
}

export default Todo;
