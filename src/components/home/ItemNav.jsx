const ItemNav = ({ title, selected, onClick }) => {
  const selectedClass = "";
    return  (
        <div
        className={`relative py-2 cursor-pointer ${
          selected === title
            ? "before:w-1/2 before:h-[2px] before:absolute before:bg-[#EC7C6A] before:left-0 before:rounded-full before:-bottom-[1px] text-[#EC7C6A]"
            : "hover:text-gray-200"
        }`}
        onClick={onClick}
      >
        {title}
      </div>
    )
}

export default ItemNav