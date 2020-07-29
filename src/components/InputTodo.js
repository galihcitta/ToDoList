import React, { useState } from 'react'

function InputTodo({ addToDo }) {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addToDo(value)
            setValue('')
        }
    }
 
    return (
        <div>   
            <input 
                type="text"
                className="input-text"
                value={value}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    )
}

export default InputTodo