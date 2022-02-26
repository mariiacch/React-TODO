import React,{useEffect,useState} from 'react';

//custom hook para almacenar info al localStorage

function useLocalStorage(itemName, initialValue){

    //estado de Item
  const [item,setItem]= useState(initialValue)
  //estado de carga:
  const [loading,setLoading]=useState(true);
  //estado de error:
  const [error,setError]=useState(false);
  
    //para simular la carga de informacion se usara un setTimeout
    useEffect(()=>{
      setTimeout(() => {
        try{
          const localstorageItem=localStorage.getItem(itemName)
  
        //creo la variable vacia para cuando no tenga tareas:
        let parsedItem;
      
        //si no existe crea un array vacio
        if(!localstorageItem){
          localStorage.getItem(itemName,JSON.stringify(initialValue))
          parsedItem=initialValue;
      
        }else{
          //caso contrario parsea los Item
          //transforma en obj de js comun y corriente
          parsedItem=JSON.parse(localstorageItem)
        }
        setItem(parsedItem);
        setLoading(false)
        }catch(err){
          setError(err)
        }
      }, 3000);
    })
  
   
  
  
     //Funcion para guardar Item (se usara como un puente entrecompleteItem y deleteItem)
   const saveItem=(newItem)=>{
    try {
      const stringifiedItem= JSON.stringify(newItem)
    localStorage.setItem(itemName,stringifiedItem)
    //modifico el estado para evitar que recargue la pagina
    setItem(newItem);
    } catch (error) {
      setError(error)
    }
  }
  
  return{
    item,
    saveItem,
    loading,
    error
  
  };
  }
  
  export {useLocalStorage}