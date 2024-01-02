import ItemList from "./ItemList";

const MenuCategory = ({ cat }) => {
  console.log(cat);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-emerald-50 p-4 shadow-lg">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {cat.title}({cat.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <ItemList items={cat.itemCards} />
      </div>
    </div>
  );
};

export default MenuCategory;
