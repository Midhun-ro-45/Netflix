import React from 'react'
import "./Button.css"

function Button({content,svg,onClick,disabled,name,color="white",backgroundColor="red",size="fontsize",handleclick,fontfamily="inherit",outline="outline"}) {
 
  return (
   <button onClick={handleclick} className={`${color} ${backgroundColor} ${fontfamily} ${size} ${outline}`} >{content}</button>
 
   )
}

export default Button