import React from 'react'

function Heading({content,size,color,fontfamily,fontweight}) {
  return (
    <h1 style={{fontFamily:`${fontfamily}`,fontweight:`${fontfamily}`}}>{content}</h1>
  )
}

export default Heading