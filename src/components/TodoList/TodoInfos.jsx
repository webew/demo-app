import React from 'react'

const TodoInfos = ({ todos }) => {
    return (
        <>
            <span style={{ color: "green" }}>
                {
                    todos.filter(todo => todo.done === true).length
                } done
            </span>
            <span> / </span>
            <span style={{ color: "red" }}>
                {
                    todos.filter(todo => todo.done === false).length
                } to do
            </span>
        </>
    )
}

export default TodoInfos