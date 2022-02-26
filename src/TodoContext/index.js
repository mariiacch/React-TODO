import React from 'react'
import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react';
const TodoContext = React.createContext() 

//todas las propiedades que quiera compartir en el contexto deben estar en el value del provider
function TodoProvider(props){

   //traigo el custom hook:
   const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

//filtrar Item para ver cual tiene la propiedad completed en true
//el doble !! significa verdaderoo
//length para obtener la cantidad
//const completedItem =Item.filter(todo=> !!todo.completed).length;
const completedTodos = todos.filter(todo => !!todo.completed).length;
  
//total de Item:
const totalTodos = todos.length;

  //aca creo el estado(de search) general para compartir:
 const [searchValue, setSearchValue]= useState('')

 //luego envio las props al componente (searchValue, setSearchValue) y funcionara normalmente

 //estado del modal open:
 const [openModal,setOpenModal]= useState(false)
  //estado del modal close:
  const [closeModal,setCloseModal]= useState(true)

 //para filtrar en el search el valor que busque el usuario:
//creo mi variable auxiliar que utilizare ahora en el map abajo:
let searchedTodos = [];

 //condiciones:
 // (si no hay nada en serachValue)
 if (!searchValue.length >= 1) {
  searchedTodos = todos;
} else {// si hay:
  searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    //se retorna para decirle al metodo filter que este es el criterio de evaluacion:
    return todoText.includes(searchText);
  });
}

//funcion para agregar todos:
const addTodo = (text) => {
//copia:
const newTodos=[...todos];
// necesito crear un nuevo obj dentro de la lista de todos
  newTodos.push({
  completed: false,
  text,
})
saveTodos(newTodos)

};




 //metodo para completar to-dos:
 const completeTodo = (text) => {
    //primero se debe encontrar el index dentro de los Item que tenga el text
  const todoIndex = todos.findIndex(todo => todo.text === text);
  //creo mi variable auxiliar para hacer la copia de la lista Item
  // en la que le inyecto Item los Item que tenia antes
  // uso el spreadOperator (...todos)
  const newTodos = [...todos];
  //Despues en esa posicion vamos a marcarle el completed como true:
  newTodos[todoIndex].completed = true;
  //finalmente actualizo mi estado con mi nuevo array de Item modificado (newItem):
  saveTodos(newTodos);
};



 //metodo para eliminar to-dos:
 const deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  // uso el metodo splice para cortar newItem
// le debo definir desde donde va a cortar
// en este caso es desde el todoIndex
//hasta 1 ( en ese caso queremos eliminar solo 1 todo)
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
};

    return(

<TodoContext.Provider value={{
          loading,
          totalTodos,
          error,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
          addTodo


        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider}