import React from 'react';
import './SuspenseList.css'

const SuspenseList = ({ label, options }) => {
  return (
    <div className='suspense-list'>
      <label htmlFor="select-field">{label}</label>
      <select>
      {options.map(item => {
        return <option key={item}  value={item}>
        {item}</option>
        })}
      </select>
    </div>
  )
}

export default SuspenseList;
