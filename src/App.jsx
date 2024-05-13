import SideBar from "./components/SideBar"
import SideBarMovil from "./components/SideBarMovil"
import OrdersScreen from "./components/orders/OrdersScreen"
import HomeScreen from "./components/home/HomeScreen"
import { useAppContext } from "./context/appContext"
import CardPayment from "./components/orders/CardPayment"

function App() {
  const { showOrder, showMenu } = useAppContext()
  
  return (
    <div className="w-full h-screen">
      {showMenu && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>}
      <SideBar />
      <SideBarMovil />
      <div className="lg:pl-28 bg-[#262837]" style={{ marginBottom: 500 }}>
        <div className={!showOrder ? "w-full lg:w-3/4" : "hidden"}>
          <HomeScreen />
        </div>
        <div className={showOrder ? "w-full h-screen" : "hidden lg:block w-24 fixed right-0 top-0 bottom-0"}>
          <OrdersScreen />
          <CardPayment />
        </div>
      </div>
    </div>
  )
}

export default App
