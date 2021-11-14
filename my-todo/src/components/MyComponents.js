import React, { useState } from 'react'
import { TodoContext } from './TodoContext'

export const MyComponents = (props) => {
    const [todos, setTodos] = useState([])
    const [Progress, setProgress] = useState([])
    const [done, setDone] = useState([])
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    const addTodo = (value) => {
        if (value) {
            const newItem = {
                id: Math.random().toString(30).substr(2, 9),
                task: value,
                complete: false,
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTodo = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : {...todo}
            )
        ])
    }

    const moveInProgress = (itemId, itemComplete, itemTask) => {
        setProgress([...Progress, {itemId, itemComplete, itemTask}]);
        removeTodo(itemId);
    };

    const removeTaskInProgress = (id) => {
        setProgress([...Progress.filter((item) => item.itemId !== id)])
    }

    const moveToDone = (doneId, doneTask) => {
        setDone([...done, {doneId, doneTask}]);
        removeTodo(doneId);
        removeTaskInProgress(doneId)
    };

    const removeTaskInDone = (id) => {
        setDone([...done.filter((item) => item.doneId !== id)])
    }

    return (
        <TodoContext.Provider value={{ todos, removeTaskInDone, moveInProgress, moveToDone, removeTaskInProgress, Progress, addTodo, handleSubmit, handleChange, value, handleKey, removeTodo, handleToggle, done }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default MyComponents;