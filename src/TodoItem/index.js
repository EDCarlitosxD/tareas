import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoItem.css'
function TodoItem(props) {

    return (
        <li className='item'>
            <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>✔</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span onClick={props.onDelete} className='Icon Icon-delete'> x</span>
        </li>
    )
}

export { TodoItem }
