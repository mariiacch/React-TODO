import React from 'react'
//importo el ReactDOM para el portal del modal 
import  ReactDOM  from 'react-dom'
import './Modal.css'

//aca creo el portal para el modal que se le van a pasar los children
const Modal= ({children}) => {
  return ReactDOM.createPortal(
      <div className='ModalBackground'>
        {children}
      </div>,
      document.getElementById('modal')
  )
}

export {Modal}