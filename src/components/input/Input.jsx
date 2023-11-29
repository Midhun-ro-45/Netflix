import React from 'react';
import "./input.css"

const Input = ({ type, placeholder, value, onChange }) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} className='outline'/>;
};

export default Input;