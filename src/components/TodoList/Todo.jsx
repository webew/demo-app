import React from 'react'

const Todo = ({ todo, majTodos }) => {
    console.log(todo);

    function handleChange(id) {
        console.log("Change : ", id);
        majTodos(id);
    }
    return (
        <div>
            <input type="checkbox" checked={todo.done} onChange={() => handleChange(todo.id)} />
            {todo.name}
        </div>
    )
}

export default Todo