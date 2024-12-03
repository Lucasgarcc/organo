/* eslint-disable react/prop-types */
import './Input.css';


const Input = ({label, type , text, placeholder }) => {

  return (
    <form >
      <div className='form-container'>
        <label htmlFor={label} > {text}</label>
        <input type={type} name={label} placeholder={placeholder} />
      </div>

    </form>
  )
}


export default Input;