import React, {useContext} from 'react'
import { TodoContext } from './TodoContext'

function TodoDone() {
    const {done, handleToggle, removeTaskInDone} = useContext(TodoContext);

    return (
        <div className="task_card">
            <h3 className='card_title'>Done</h3>
            {done.map((todo) => {
                return (
                    <div key={todo.doneId} className="todo_item">
                        <div className="item-text"
                             onClick={() => handleToggle(todo.doneId)}>
                            {todo.doneTask}
                        </div>
                        <div className="emoji">
                            <button className="todo-delete" onClick={() => removeTaskInDone(todo.doneId)}>
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoDone;