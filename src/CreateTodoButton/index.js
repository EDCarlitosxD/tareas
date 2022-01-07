import React from 'react'
import './CreateTodoButton.css'
function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(estado => !estado)
    }


    return (
        <button onClick={onClickButton} className='btn-add' type='button'>+</button>
    )
}

export { CreateTodoButton }
