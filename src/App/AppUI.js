import React from 'react'
import {TodoCounter} from '../TodoCounter'
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import {Modal} from '../Modal/index'
import { TodoForm } from '../TodoForm';
import {TodosError} from '../TodosError/index'
import {TodosLoading} from '../TodosLoading/index'
import {EmptyTodos} from '../EmptyTodos/index'
import CircularProgress from '@mui/material/CircularProgress';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    
  } =useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      
          <TodoList>
            {error && <TodosError error={error}/> }
            {loading && 
            
            <CircularProgress/>
    
    
    }
            {(!loading && !searchedTodos.length) && <EmptyTodos/>}
            
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

       {/** Pregunto si openModal es true,
        * si lo es, porfa renderiza el modal
        */} 
    {openModal &&(

      <Modal>
      <TodoForm/>
      </Modal>
    )
    
    }
    {/** al boton le envio el atributo
     * setOpenModal y le envio la funcion tal cual (el estado) , de esta forma llamo el actualizador que usare en el componente de createTodoButton
        */} 
      <CreateTodoButton
      setOpenModal={setOpenModal}
      
      />
    </React.Fragment>
  );
}

export { AppUI };