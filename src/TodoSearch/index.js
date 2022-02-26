import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'



function TodoSearch() {
  //traigo el context en vez de pasar por props
  const {searchValue, setSearchValue} = useContext(TodoContext)

  const onSearchValueChange=(event)=>{
    //console.log(event.target.value)
    setSearchValue(event.target.value)

  }
  return (
    <div className='search-container'>

    <input 
    className='search-input' 
    placeholder='cebolla'
    value={searchValue}
    onChange={onSearchValueChange} />
    
    <span>
    <svg className="search-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </span>

    <p>{searchValue}</p>
    </div>
  )
}

export  {TodoSearch}