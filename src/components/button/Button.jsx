

function Button({ content,
  borderRadius,
  padding,
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  onclick,
  height,
  width,

}) {


  return (
    <button onClick={onclick} style={{ width, height, fontWeight, padding, borderRadius, fontSize, backgroundColor, color, }}  >{content}</button>

  )
}

export default Button