import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useFetchMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };
  return resInfo;
};

export default useFetchMenu;
