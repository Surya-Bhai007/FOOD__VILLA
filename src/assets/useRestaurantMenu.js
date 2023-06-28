import { resMenu } from "../assets/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (res_id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resMenu + `${res_id}&submitAction=ENTER`);
    const json = await data.json();
    setResInfo(json?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
