import "./Button.css"

function Button({ content, svg, onClick, borderRadius, padding, fontSize, border = "none", color, backgroundColor, size = "fontsize", handleclick, fontfamily = "inherit", outline = "outline" }) {
  console.log(padding);
  return (
    <button style={{ padding, borderRadius, fontSize, backgroundColor, color, border }} onClick={handleclick} className={`${color} ${backgroundColor} ${fontfamily} ${size} ${outline}`} >{content}</button>

  )
}

export default Button