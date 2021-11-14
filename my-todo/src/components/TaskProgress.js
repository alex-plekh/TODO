import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'

function InProgress() {
    const { Progress, removeTaskInProgress, handleToggle, moveToDone } = useContext(TodoContext)

    return (
        <div className="task_card">
            <h3 className='card_title'>In progress</h3>

            {Progress.map((todo) => {
                return (
                    <div key={todo.itemId} className="todo_item">
                        <div onClick={() => handleToggle(todo.id)}>
                            {todo.itemTask}
                        </div>
                        <div className="emoji">
                            <button className="btn_done" onClick={() => moveToDone(todo.itemId, todo.itemTask)}>
                                Done
                            </button>
                            <button className="btn_delete" onClick={() => removeTaskInProgress(todo.itemId)}>
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InProgress