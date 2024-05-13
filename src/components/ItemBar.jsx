const ItemBar = ({ children, selected, onClick }) => {
  return (
    <li 
      className={`p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] transition-colors mb-2 ${selected && "bg-[#262837]"}`}
    >
      <a
        href="#"
        className={`p-4 flex justify-center rounded-xl ${selected ? "bg-[#EC7C6A] text-white" : "text-[#EC7C6A]"}`}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  )
}

export default ItemBar
