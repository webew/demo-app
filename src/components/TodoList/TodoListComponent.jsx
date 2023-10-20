import React, { createContext, useEffect, useState } from 'react'
import TodoList from './TodoList'
import TodoInfos from './TodoInfos'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import TodoActions from './TodoActions';

export const TodoContext = createContext();

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
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('TODOS'));
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem('TODOS', JSON.stringify(todos));
    }, [todos])

    function majTodos(id) {
        console.log("Modification du state des todos", id);
        const newTodos = [...todos]; // crée un clone de todos dans newTodos
        const todo = newTodos.find((todo) => todo.id === id); // renvoie l'élément du tableau todosArr correspondant à id
        todo.done = !todo.done;
        setTodos(newTodos);
    }

    function addTodo(name) {
        const newTodo = { id: uuidv4(), name: name, done: false };
        const newTodoList = [...todos, newTodo];
        console.log(newTodoList);
        setTodos(newTodoList);
    }

    function clearDone() {
        // chercher les todos done=true
        const unDoneTodos = todos.filter(todo => todo.done === false);
        setTodos(unDoneTodos);
    }

    function handleCheckAll(boolCheck) {
        const allTodos = [...todos]; // allTodos est un clone de todos
        allTodos.map((todo) => todo.done = boolCheck);
        setTodos(allTodos);
    }

    return (
        <>
            <TodoInfos todos={todos} />
            <TodoContext.Provider value={[majTodos]}>
                <TodoList todos={todos} />
            </TodoContext.Provider>
            <div>
                <TodoForm addTodo={addTodo} />
            </div>
            <div>
                <TodoActions clearDone={clearDone} handleCheckAll={handleCheckAll} />
            </div>
        </>
    )
}

export default TodoListComponent