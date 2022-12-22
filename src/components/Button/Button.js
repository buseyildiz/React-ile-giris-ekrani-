import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

 function Button({text,onClick}) {
  return (
   <button className='custom-button' onClick ={onClick}>{text} </button>
  )
}

Button.propTypes = {
    onClick : PropTypes.func.isRequired,
    text : PropTypes.string
}
Button.defaulProps ={
    text : "Tıkla"
}

export default Button
