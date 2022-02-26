import React from 'react'
import './TodoItem.css'

function TodoItem(props) {


  return (
    <div className="contain-list">
    <li className='listas'>
        
        {/**condicional en css dentro de la clase: si el componente recibe una propiedad complete (props.complete) que sea true, entonces agrega la nueva clase:itemTarea--active
         *  
         * className={`itemTarea
           ${props.complete && 'itemTarea--active'}`}
         * 
         * 
         */} 
        <span>
          
          <svg 
          onClick={props.onComplete}
          className={`itemTarea
           ${props.completed && 'itemTarea--active'}`}
          fill="none" stroke="blue" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} d="M9 5l7 7-7 7" />
            
            </svg>
            
            </span>
        
        <div className={`contain-text
           ${props.completed && 'contain-text--active'}`} >
        <p>{props.text}</p>
        </div>
        
        <span>

        <svg 
        onClick={props.onDelete}
       className="itemClose"
        fill="none" 
        stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        
        </svg>
        </span>
    </li>
    </div>
  )
}

export  {TodoItem}