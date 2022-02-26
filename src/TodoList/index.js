import React from 'react'
import './TodoList.css'


function TodoList(props) {
  return (
    <section className='TodoList'>
        <ul className='listItem'>
            {props.children}
        </ul>
    </section>
  )
}

export {TodoList}