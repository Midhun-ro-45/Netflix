import React from 'react'
import "./Button.css"

function Button({content,svg,onClick,disabled,name,color="white",backgroundColor="red",handleclick,fontfamily="inherit",outline="outline"}) {

  return (
   <button  onClick={handleclick} className={`${color} ${backgroundColor} ${fontfamily} ${outline}`}>{content}</button>
 
   )  
}

export default Button