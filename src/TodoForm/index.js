import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        // a
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <label>Escribe una tarea</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Realizado en REACT por el mas humilde de latinoamerica" />
            <div className="div-btn">
                <div>
                    <button className="btn btn-cancel" type="button" onClick={onCancel}>Cancelar</button>
                </div>
                <div>
                    <button className="btn btn-añadir" type="submit">Añadir</button>
                </div>
            </div>

        </form>
    )
}

export { TodoForm }