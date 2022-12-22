import React from 'react';
import propTypes from 'prop-types';
import './Input.css'

function Input({type,placeholder,value,onChange}) {
  return (
   <input className='custom-input' value={value} type={type} placeholder={placeholder}  onChange={onChange}/>
  )
}



Input.propTypes={
    value : propTypes.string.isRequired,
    placeholder : propTypes.string,
    onChange : propTypes.func.isRequired,
    type : propTypes.string
}

Input.defaultProps = {
    placeholder : "Değer Giriniz...",
    type : "text"
}

export default Input