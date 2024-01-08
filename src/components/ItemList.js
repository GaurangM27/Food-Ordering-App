import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price !== undefined
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="relative w-3/12 p-4">
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            <div className="absolute inset-x-5 bottom-0">
              <button className="p-2 mx-10 bg-black text-white">ADD+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
