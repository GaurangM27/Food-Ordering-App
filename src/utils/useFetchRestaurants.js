import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useFetchRestaurants = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    console.log(json);
    let ind = 4;
    if (json?.data?.cards[ind]?.card?.card?.gridElements === undefined) {
      ind = 5;
      console.log(ind);
    }
    setResList(
      json?.data?.cards[ind]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return resList;
};

export default useFetchRestaurants;
