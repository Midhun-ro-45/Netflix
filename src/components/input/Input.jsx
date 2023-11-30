import React from 'react';
import "./Input.css"

const Input = ({ type, placeholder, value, onChange, width, padding, backgroundColor, lineHeight, borderRadius, outline = "none" }) => {
  return <input style={{ padding, borderRadius, outline, backgroundColor }} type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;