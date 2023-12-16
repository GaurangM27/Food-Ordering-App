import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  // destructuring of data using props
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;

  const { deliveryTime } = resData.info.sla;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="res-bottom">
        <h4>{avgRating} &#9733;</h4>
        <h4>{deliveryTime} min</h4>
      </div>
    </div>
  );
};

export default RestuarantCard;
