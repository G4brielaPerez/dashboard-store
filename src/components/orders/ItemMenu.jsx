import { RiDeleteBin6Fill } from "react-icons/ri"

const ItemMenu = () => {
  return (
    <div className="bg-[#262837] p-4 rounded-xl">
      <div className="grid grid-cols-6">
        <div className="col-span-4 flex items-center gap-2">
          <img src="dish.png" className="w-14 h-14 object-cover" />
          <div>
            <h2 className="text-gray-300 font-semibold">
              Spicy seasoned seafood noodles
            </h2>
            <p className="text-gray-400">$ 2.29</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className=" bg-[#1F1D2B] rounded-lg py-2 px-4 text-gray-300">2</button>
        </div>

        <div className="flex items-center justify-center">
            <p className="text-center text-gray-300 font-semibold">$ 4.58</p>
        </div>
      </div>

      <div className="grid grid-cols-6 mt-4">
        <div className="col-span-5">
            <input 
                type="text"
                placeholder="Order Note..."
                className="bg-[#1F1D2B] w-full py-3 px-4 rounded-lg text-gray-300 outline-none" 
            />
        </div>

        <div className="flex items-center justify-center">
            <button className="border border-red-500 rounded-lg p-3">
                <RiDeleteBin6Fill className="text-red-500" />
            </button>
        </div>
      </div>
    </div>
  )
}

export default ItemMenu
