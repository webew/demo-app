import React, { useContext } from 'react'
import { TodoContext } from "./TodoListComponent";

const Todo = ({ todo }) => {
    console.log(todo);

    const [majTodos] = useContext(TodoContext);

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