import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase/compat/app';


function App() {
  const [todos, setTodos] = useState([])//todos is an array containing todo 
  // tasks and setTodos is used to iterate over them one by one
  const [input, setInput] = useState('');
  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []);

  // ADDING AN ITEM IN TODO LIST
  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); //will stop the Refresh everytime.
    // Now the item will also be stored in firebase database using db
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
      // this line will be used to sort the data entries by time similar to that of database.
    })
    setInput('');//clear up the input after storing the task
  }

  return (
    // BUTTON & INPUT SECTION
    <div className='container'>
      <div className="App">
        <h1>To-Do List!!</h1>
        <form>
        
          <Input value={input} onChange={event => setInput(event.target.value)}>
          <InputLabel>✅ Your To-Do task</InputLabel>
          </Input>
          


          <Button className='button' disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
        </form>  {/* we used form here so that the task gets added on clicking "Enter" button as well. */}
        <ul>
          {/* we use disabled input so that only after typing something in the box it will get enabled and will not be enabled for empty box */}
          {todos.map(todo => (
            <Todo todo={todo} />
            // <li>{todo}</li> now the list or todo part has been shifted to todo.js
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
