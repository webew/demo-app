import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    function handleDecrement() {
        setCount(count - 1);
    }
    function handleIncrement() {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <div>{count}</div>
            <button onClick={handleIncrement}>+</button>
        </>
    )
}

export default Counter