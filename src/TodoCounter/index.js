import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'
function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <>
            <h1>Has completado {completedTodos} de {totalTodos} Tareas</h1>
        </>

    )
}

export { TodoCounter }
