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