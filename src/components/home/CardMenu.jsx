const CardMenu = () => {
    return (
        <div className="bg-[#1F1D2B] p-8 rounded-lg flex flex-col items-center text-gray-300 text-center mb-6">
            <img 
                src="dish.png" 
                className="w-40 h-40 object-cover -mt-24 rounded-full" 
            />
            <p className="font-semibold text-lg">Spicy seasoned seafood noodles</p>
            <p>$ 2.29</p>
            <p className="text-gray-400">20 Bowls available</p>
        </div>
    )
}

export default CardMenu
