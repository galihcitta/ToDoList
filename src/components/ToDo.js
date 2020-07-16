import React, { useState } from 'react'
import { dummyData } from '../data/dummy'

function ToDo() {
    const [todos, setTodos] = useState(dummyData)
    const [text, setText] = useState('') 


    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
           <ul>
            {
                todos.map((todo, i) => (
                    <li key={i}>
                        <span>{todo.name} </span>
                        {
                            !todo.completed ? 
                            <span><b>blm selesai</b></span> :
                            <span><b>udah selesai</b></span>
                        }
                    </li>
                ))
            }
                    <li>
                        <input
                            type="text"
                            value={text}
                            placeholder="masukin todo kamu"
                            onChange={handleChange}
                        />
                    </li>
           </ul>
        </div>
    )
}

export default ToDo