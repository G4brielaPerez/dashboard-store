import NavButton from "./NavButton"
import ItemMenu from "./ItemMenu"

const OrdersScreen = () => {
  return (
    <div className="bg-[#1F1D2B] h-full p-6">
      <h1 className="text-2xl text-gray-300 font-bold mb-4">Orders #34562</h1>
      
      <NavButton />

      <div className="grid grid-cols-6 mt-4 text-gray-300 font-semibold">
        <h5 className="col-span-4">Item</h5>
        <h5 className="text-center -ml-5">Qty</h5>
        <h5 className="text-center -ml-5">Price</h5>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <ItemMenu />
        <ItemMenu />
      </div>
    </div>
  )
}

export default OrdersScreen
