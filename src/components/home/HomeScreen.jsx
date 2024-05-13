import { RiSearch2Line, RiArrowDownSLine } from "react-icons/ri";
import Nav from "./Nav";
import CardMenu from "./CardMenu";

const HomeScreen = () => {
  return (
    <div className="flex flex-col gap-6 py-6 px-8 bg-[#262837]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="mb-2 md:mb-0">
          <h1 className="text-2xl text-gray-300 font-bold">Jeager Resto</h1>
          <p className="text-gray-500">10 de Mayo del 2024</p>
        </div>

        <div className="w-full md:w-1/3 relative">
          <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
          />
        </div>
      </div>

      <Nav />

      <div className="flex items-center justify-between">
        <h2 className="text-xl text-gray-300 font-bold">Choose Dishes</h2>
        <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
          <RiArrowDownSLine />
          Dine in
        </button>
      </div>

      <div className="mt-14 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-16 lg:pb-0">
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
      </div>
    </div>
  )
}

export default HomeScreen
