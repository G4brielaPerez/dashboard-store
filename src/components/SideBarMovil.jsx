import { RiMenuFill, RiHome6Line, RiCloseLine, RiFileTextLine } from "react-icons/ri";
import { useAppContext } from "../context/appContext";
import { useState } from "react";

const SideBarMovil = () => {
  const { showMenu, setShowMenu, setShowOrder } = useAppContext();
  const [selectedButton, setSelectedButton] = useState("home");
  const buttonClass = "text-gray-400 rounded-full p-2"

  const toggleMenu = () => {
    setShowMenu(false);
    setSelectedButton(selectedButton);
  }

  const handleButtonClick = (button) => {
    if (button === "order") {
      setShowOrder(true)
    } else {
      setShowOrder(false)
    }

    setSelectedButton(button)
  }

  return (
    <>
      {!showMenu ? (
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          <button
            className={`${buttonClass} ${ selectedButton === "home" ? "bg-[#EC7C6A] text-white" : "hover:bg-gray-500 hover:text-white"}`}
            onClick={() => handleButtonClick("home")}
          >
            <RiHome6Line />
          </button>
          <button
            className={`${buttonClass} ${ selectedButton === "order" ? "bg-[#EC7C6A] text-white" : "hover:bg-gray-500 hover:text-white"}`}
            onClick={() => handleButtonClick("order")}
          >
            <RiFileTextLine />
          </button>
          <button 
            className={`${buttonClass} hover:bg-gray-500 hover:text-white`} 
            onClick={() => setShowMenu(true)}
          >
            <RiMenuFill />
          </button>
        </nav>
      ) : (
        <button
          className="bg-[#EC7C6A] text-white p-2 rounded-full absolute bottom-4 right-6 text-3xl z-50"
          onClick={toggleMenu}
        >
          <RiCloseLine />
        </button>
      )}
    </>
  )
}

export default SideBarMovil;
