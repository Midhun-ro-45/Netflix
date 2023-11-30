import "./Button.css"

function Button({ content,
  svg,
  borderRadius,
  padding,
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  onclick
}) {


  return (
    <button onClick={onclick} style={{ fontWeight, padding, borderRadius, fontSize, backgroundColor, color, }}  >{content}</button>

  )
}

export default Button