import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'
const TodoForm = () => {
    //estado para el newTodo
    const [newTodoValue,setNewTodoValue] =useState('')


    //llamo el estado 
    const {
        addTodo,
        setOpenModal
    }= useContext(TodoContext)
    
    //funcion para cancelar
    const onCancel=()=>{
        setOpenModal(false)
    }

    //funcion para agregar
    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)

    }
    //funcion onChange
    const onChange=(event)=>{
       setNewTodoValue(event.target.value) 
    }
  return (
    <form onSubmit={onSubmit}>
        <label>
            Escribe tu nuevo TODO!!
        </label>
        
        <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Cortar la cebolla para el Almuerzo'
        />
        <div className='container-btn-form' >
           
            <button 
            onClick={onCancel}
            type="button"
            className='btn-cancel'
            >
                Cancelar
                
            </button>
           
            <button 
            type='submit'
            className='btn-agg'
    >
                Añadir
            </button>
        </div>

    </form>
  )
}

export {TodoForm}