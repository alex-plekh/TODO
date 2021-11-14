import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'
import { TodoForm } from './TodoForm'

function Todo() {
    const { todos, moveToDone, removeTodo, handleToggle, moveInProgress } = useContext(TodoContext)
    return (
        <div className="task_card">
            <h3 className='card_title'>Todo</h3>
            <TodoForm />
            {todos.map((todo) => {
                return (
                    <div className='wrapper_todo_item'>
                    <div key={todo.id} className="todo_item">
                        <div className='item_wrapper' onClick={() => handleToggle(todo.id)}>
                            {todo.task}
                        </div>
                        <div className="btn_wrapper">
                            <button className="btn_progress" onClick={() => moveInProgress(todo.id, todo.complete, todo.task)}>
                                In Progress
                            </button>
                            <button className="btn_done" onClick={() => moveToDone(todo.id, todo.task)}>
                                Done
                            </button>
                            <button className="btn_delete" onClick={() => removeTodo(todo.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
            </div>
                )
            })}
        </div>
    )
}

export default Todo