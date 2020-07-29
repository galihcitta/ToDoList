import React from 'react'


function ToDo({ todo, index,  completeTodo, removeTodo }) {

    return (
        <div className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }}>   
            {todo.name}
            <div>
                {todo.completed ? 
                    <button disabled>Completed</button> : 
                    <button onClick={() => completeTodo(index)}>Complete</button>
                }
               
                <button onClick={() => removeTodo(index)}>x</button>
             </div>
        </div>
    )
}

export default ToDo