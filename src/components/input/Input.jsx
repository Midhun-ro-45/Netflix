import React from 'react';
import "./input.css"

const Input = ({ type,name="",
  placeholder,
  value,
  onChange,
  width,
  padding,
  backgroundColor,
  lineHeight,
  borderRadius,
  height,
  outline = "none" }) => {
  return <input name={name} style={{ height, width, lineHeight, padding, borderRadius, outline, backgroundColor }} type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;