import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  // destructuring of data using props
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;

  const { deliveryTime } = resData.info.sla;

  return (
    <div className="w-[200px] h-[400px] m-2 p-2 bg-stone-300 rounded-lg hover:bg-stone-400">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="font-normal py-2">{cuisines.join(", ")}</h4>
      <div className="flex justify-between py-4">
        <h4>{avgRating} &#9733;</h4>
        <h4>{deliveryTime} min</h4>
      </div>
    </div>
  );
};

export const withVegLabel = (RestuarantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Veg
        </label>
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;
