import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResMenu(json);
  };

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, avgRating, cuisines, costForTwoMessage } =
    resMenu?.data?.cards[0]?.card?.card?.info;

  var arrNO = 1;

  if (
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.title === "Top Picks"
  ) {
    arrNO = 2;
    console.log(arrNO);
  }

  const { itemCards } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[arrNO]
      ?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <div className="name">
        <h1>{name}</h1>
        <h2>{avgRating} &#11088;</h2>
      </div>
      <div className="cost">
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
