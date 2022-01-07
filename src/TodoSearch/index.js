import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)
    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    return (
        <>
            <form className='form-search'>
                <input value={searchValue} onChange={onSearchValueChange} placeholder="Buscar" />
            </form>

        </>
    )
}

export { TodoSearch }