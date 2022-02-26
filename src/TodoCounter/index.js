
import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  
  //traigo el context en vez de pasar por props
  const {totalTodos,completedTodos} = useContext(TodoContext)
  return (
    <h2 className="TodoCounter">Haz completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
