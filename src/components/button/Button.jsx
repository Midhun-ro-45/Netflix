import React from 'react'
import "./Button.css"

function Button({content="Get started",svg,onclick,disabled,name,color="white",backgroundColor="red",size="fontsize",handleclick,fontfamily="inherit",outline="outline"}) {
 
  return (
   <button onclick={handleclick} className={`${color} ${backgroundColor} ${fontfamily} ${size} ${outline}`} >{content}</button>
 
   )
}

export default Button