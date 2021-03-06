import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import './AppUI.css';



function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter
            />

            <TodoSearch />

            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primera TAREA!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {!!openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}


            <CreateTodoButton setOpenModal={setOpenModal} />

        </React.Fragment>
    );
}

export { AppUI }