import React, { useState } from "react";
import { MdOutlineHouse, MdOutlineBusiness, MdOutlineShoppingCart } from "react-icons/md";
import { FaCar, FaUtensils } from "react-icons/fa";

const IconSelector = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleSelectIcon = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="flex flex-col items-center">
     
      <div className="mt-4 flex items-center space-x-4">
        <button onClick={() => handleSelectIcon(MdOutlineHouse)}>
          <MdOutlineHouse className="h-8 w-8 text-gray-500" />
        </button>
        <button onClick={() => handleSelectIcon(MdOutlineBusiness)}>
          <MdOutlineBusiness className="h-8 w-8 text-gray-500" />
        </button>
        <button onClick={() => handleSelectIcon(MdOutlineShoppingCart)}>
          <MdOutlineShoppingCart className="h-8 w-8 text-gray-500" />
        </button>
        <button onClick={() => handleSelectIcon(FaCar)}>
          <FaCar className="h-8 w-8 text-gray-500" />
        </button>
        <button onClick={() => handleSelectIcon(FaUtensils)}>
          <FaUtensils className="h-8 w-8 text-gray-500" />
        </button>
      </div>
      {selectedIcon && (
        <div className="mt-4">
          {React.createElement(selectedIcon, { className: "text-4xl text-gray-800" })}
        </div>
      )}
    </div>
  );
};

export default IconSelector;
