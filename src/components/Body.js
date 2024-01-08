import RestuarantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const listOfRe = useFetchRestaurants();

  const RestaurantCardVeg = withVegLabel(RestuarantCard);

  const { loggedInInfo, setUserName } = useContext(UserContext);

  useEffect(() => {
    setFilteredRes(listOfRe);
  }, [listOfRe]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks Like You Are Offline!!</h1>;
  if (listOfRe.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex m-4 p-4">
        <div className="">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-4 bg-slate-400 px-4 py-1 rounded-lg"
            onClick={() => {
              const text = listOfRe.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(text);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="bg-green-200 px-4 py-2 rounded-lg"
            onClick={() => {
              const filterList = filteredRes.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRes(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
          <label className="mx-2">UserName :</label>
          <input
            className="border border-black mx-2 p-2"
            value={loggedInInfo}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.veg !== undefined ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestuarantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
