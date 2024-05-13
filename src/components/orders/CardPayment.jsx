import { useAppContext } from "../../context/appContext"
const CardPayment = () => {
    const { showMenu } = useAppContext()

    if(showMenu) return

    return (
        <div className="bg-[#262837] absolute bottom-14 lg:bottom-0 p-4 w-full rounded-t-xl flex flex-col gap-4">
            <div className="flex justify-between items-center font-semibold">
                <p className="text-gray-400">Discount</p>
                <p className="text-gray-300">$ 0</p>
            </div>
            <div className="flex justify-between items-center font-semibold">
                <p className="text-gray-400">Subtotal</p>
                <p className="text-gray-300">$ 13.74</p>
            </div>

            <button className="bg-[#EC7C6A] w-full p-2 rounded-lg text-white font-semibold">
                Continue to payment
            </button>
        </div>
    )
}

export default CardPayment