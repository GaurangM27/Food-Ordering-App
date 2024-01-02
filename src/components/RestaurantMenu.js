import useFetchMenu from "../utils/useFetchMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useFetchMenu(resId);

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
  console.log("On current Page");

  const { itemCards } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[arrNO]
      ?.card?.card;

  console.log(itemCards);

  const categories =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (arr) =>
        arr.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <div className="flex justify-evenly mt-6">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h2 className="">{avgRating} &#11088;</h2>
      </div>
      <div className="flex justify-evenly">
        <h3 className="">{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
      <div>
        {categories.map((ct) => (
          <MenuCategory cat={ct?.card?.card} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
