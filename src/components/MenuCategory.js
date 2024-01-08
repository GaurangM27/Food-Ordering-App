import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({ cat, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-emerald-50 p-4 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {cat.title}({cat.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={cat.itemCards} />}
      </div>
    </div>
  );
};

export default MenuCategory;
