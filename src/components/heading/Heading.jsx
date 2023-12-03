import React from 'react'

function Heading({ content, fontSize, fontWeight, color = "white" }) {
  return (
    <h1 style={{ fontSize, fontWeight, color }}>{content}</h1>
  )
}

export default Heading