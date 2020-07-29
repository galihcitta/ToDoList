import React, { useState } from 'react';
import '../styles/App.css';
import ToDo from '../components/ToDo'
import InputTodo from '../components/InputTodo'
import { dummyData } from '../data/dummy'

function App() {
  const [todos, setTodos] = useState(dummyData)

  const addToDo = (name) => {
    const newTodos = [...todos, { name, completed: false }]
    setTodos(newTodos)
  }

  const markCompleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="todolist">
        {todos.map((todo, i) => (
          <ToDo 
            key={i}
            index={i}
            todo={todo}
            completeTodo={markCompleteTodo}
            removeTodo={deleteTodo}
          />
        ))}
      </div>
      <InputTodo addToDo={addToDo} />
    </div>
  );
}

export default App;
