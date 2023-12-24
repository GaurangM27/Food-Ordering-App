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
    setResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList;
};

export default useFetchRestaurants;
