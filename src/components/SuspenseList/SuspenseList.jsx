import React from 'react';
import './SuspenseList.css'
const SuspenseList = ({ label, options }) => {
  return (

import './SuspenseList'
const SuspenseList = ({ label, options }) => {
  return (
    <div>
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
