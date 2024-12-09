import React from 'react';
import './Input.css';

const Input = ({ label, type, placeholder, requiredMessage, value, setValue, showError }) => {

  const handleChange= (event) => {
    const newValue = event.target.value
    setValue(newValue);
  }


  return (
      <div className='form-container'>
        <label htmlFor=''>{label}</label>
        <input  type={type}
          name={label} 
          placeholder={placeholder}
          value={value} 
          onChange={handleChange} />
        {showError && !value && <span className='error-message'>{requiredMessage}</span>}

/* eslint-disable react/prop-types */

import './Input.css';

const Input = ({ label, type, placeholder }) => {

  return (
        <div className='form-container'>
        <label htmlFor=''>{label}</label>
        <input type={type} name={label} placeholder={placeholder} />
      </div>
  );
}

export default Input;