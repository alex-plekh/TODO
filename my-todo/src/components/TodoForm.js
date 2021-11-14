import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'

export const TodoForm = () => {
    const { handleSubmit, handleChange, value, handleKeyPress } = useContext(TodoContext)

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="add task..."
                onChange={handleChange}
                type="text"
                value={value}
                onKeyDown={handleKeyPress}
            />
            <button type="submit">add</button>
        </form>
    )
}