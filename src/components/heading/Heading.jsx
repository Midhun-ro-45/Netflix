import React from 'react'

function Heading({content,size,color="white",fontfamily,fontweight}) {
  return (
    <h1 style={{fontFamily:`${fontfamily}`,fontweight:`${fontfamily}`,color}}>{content}</h1>
  )
}

export default Heading