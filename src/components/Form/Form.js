import React from 'react'
import propTypes from 'prop-types';
import './Form.css'

 function Form({children}) {
  return (
    <div className='custom-form'>
        {children}
    </div>
  )
}

Form.propTypes = {
    children : propTypes.node
 }
Form.defaulProps ={
  children : null
}

export default Form
