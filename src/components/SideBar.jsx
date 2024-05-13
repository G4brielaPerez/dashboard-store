import { RiHome6Line, RiPercentLine, RiPieChartLine, RiMailLine, RiNotification3Line, RiLogoutBoxRLine, RiSettings4Line } from "react-icons/ri";
import { BiSolidStoreAlt } from "react-icons/bi";
import ItemBar from "./ItemBar";
import { useAppContext } from "../context/appContext"
import { useState } from "react";

const SideBar = () => {
  const { showMenu} = useAppContext()
  const [selectedButton, setSelectedButton] = useState("home")

  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
      <div>
        <ul className="pl-4 text-2xl">
          <li>
            <div className="flex items-center justify-center p-4">
              <div className="bg-[#ec7b6a57] rounded-xl p-2 text-[#cf6454] text-4xl">
                <BiSolidStoreAlt />
              </div>
            </div>
          </li>

          <div className="hidden lg:block">
            <ItemBar 
              selected={selectedButton === "home"} 
              onClick={() => setSelectedButton("home")}
            >
              <RiHome6Line />
            </ItemBar>
          </div>

          <ItemBar 
            selected={selectedButton === "percent"} 
            onClick={() => setSelectedButton("percent")}
          >
            <RiPercentLine />
          </ItemBar>
          
          <ItemBar 
            selected={selectedButton === "pie"} 
            onClick={() => setSelectedButton("pie")}
          >
            <RiPieChartLine />
          </ItemBar>

          <ItemBar 
            selected={selectedButton === "mail"} 
            onClick={() => setSelectedButton("mail")}
          >
            <RiMailLine />
          </ItemBar>

          <ItemBar 
            selected={selectedButton === "notification"} 
            onClick={() => setSelectedButton("notification")}
          >
            <RiNotification3Line />
          </ItemBar>

          <ItemBar 
            selected={selectedButton === "settings"} 
            onClick={() => setSelectedButton("settings")}
          >
            <RiSettings4Line />
          </ItemBar>
        </ul>
      </div>

      <div>
        <ul className="pl-4">
          <ItemBar>
            <RiLogoutBoxRLine className="text-2xl" />
          </ItemBar>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
