import React from 'react'
import './TodosLoading.css'
//import {Spinner} from 'reactstrap'
import {CircularProgress} from '@mui/material'

const TodosLoading = () => {
  return (
    <div  >
      
      <CircularProgress color="secondary" />
 
    
    </div>
    
  )
}

export {TodosLoading}