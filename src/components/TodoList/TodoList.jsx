import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, majTodos }) => {
    return (
        <>
            {
                todos.map((todo) => {
                    return <Todo
                        key={todo.id}
                        todo={todo}
                        majTodos={majTodos} />
                })
            }
        </>
    )
}

export default TodoList