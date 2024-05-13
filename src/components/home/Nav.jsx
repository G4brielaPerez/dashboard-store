import { useState } from "react";
import ItemNav from "./ItemNav";

const Nav = () => {
  const [selectedItem, setSelectedItem] = useState("Hot dishes");

  return (
    <nav className="text-gray-400 flex items-center justify-between md:justify-start md:gap-8 border-b">
      <ItemNav 
      title="Hot dishes" 
      selected={selectedItem}
      onClick={() => setSelectedItem("Hot dishes")}
      />
      <ItemNav 
      title="Cold dishes" 
      selected={selectedItem}
      onClick={() => setSelectedItem("Cold dishes")}
      />
      <ItemNav 
      title="Appetizer" 
      selected={selectedItem}
      onClick={() => setSelectedItem("Appetizer")}
      />
      <ItemNav 
      title="Desserts" 
      selected={selectedItem}
      onClick={() => setSelectedItem("Desserts")}
      />
    </nav>
  )
}

export default Nav
