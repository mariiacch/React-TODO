import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './button.css'


function CreateTodoButton() {
  const {
   
    openModal,
    setOpenModal,
    
  } =useContext(TodoContext)

  //aqui llamo el actualizador de abrir el modal en true
  //para que cuando haga click en el boton el se abra
  const onClickButton=()=>{
    //actualiza el modal setOpenModal a la negacion del esstado inicial (openModal)
    //asi cuando este en el estado setOpenModal true tambien al hacer click puedo volver al estado inicial negado (osea false)
    setOpenModal(!openModal)
    
  }

  return (
  <div className='contain-btn'>
    <h2 className='title-add'> Agrega to-do</h2>
    <button className='btn-add'
    onClick={onClickButton}

    >
    <svg 
    className="w-6 h-6" 
    fill="none" stroke="currentColor" 
    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" 
      strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      </button>
      
  </div>
    
  )
}

export { CreateTodoButton}