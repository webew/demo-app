import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoInfos from './TodoInfos'
const todosArr = [
    {
        id: 1,
        name: 'Truc',
        done: true
    },
    {
        id: 2,
        name: 'Trac',
        done: false
    },
    {
        id: 3,
        name: 'Troc',
        done: true
    }
]
const TodoListComponent = () => {
    const [todos, setTodos] = useState(todosArr);

    function majTodos(id) {
        console.log("Modification du state des todos", id);
        const newTodos = [...todos]; // crée un clone de todos dans newTodos
        const todo = newTodos.find((todo) => todo.id === id); // renvoie l'élément du tableau todosArr correspondant à id
        todo.done = !todo.done;
        setTodos(newTodos);
    }

    return (
        <>
            <TodoInfos todos={todos} />
            <TodoList todos={todos} majTodos={majTodos} />
        </>
    )
}

export default TodoListComponent