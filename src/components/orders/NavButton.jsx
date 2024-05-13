import { useState } from "react";

const NavButton = () => {
  const [selectededButton, setSelectedButton] = useState("dine-in");
  const selectedClass = "bg-[#EC7C6A] text-white py-2 px-4 rounded-xl font-semibold";
  const unselectedClass = "text-[#EC7C6A] py-2 px-4 rounded-xl border border-gray-500 font-semibold hover:bg-gray-500 hover:text-white";

  return (
    <div className="flex items-center gap-2">
      <button
        className={selectededButton === "dine-in" ? selectedClass : unselectedClass}
        onClick={() => setSelectedButton("dine-in")}
      >
        Dine in
      </button>
      <button
        className={selectededButton === "to-go" ? selectedClass : unselectedClass}
        onClick={() => setSelectedButton("to-go")}
      >
        To go
      </button>
      <button
        className={selectededButton === "delivery" ? selectedClass : unselectedClass}
        onClick={() => setSelectedButton("delivery")}
      >
        Delivery
      </button>
    </div>
  );
};

export default NavButton;
