import { useEffect, useState } from "react";
import { IMG_CDN_menu_url, resMenu } from "../assets/constants";
import { MenuList } from "../assets/MenuList";
import { useParams } from "react-router-dom";

const Restaurant_Menu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { res_id } = useParams();
  console.log(res_id);
  // console.log(res_id);
  const getMenu = async () => {
    const data = await fetch(resMenu + `${res_id}&submitAction=ENTER`);
    const json = await data.json();
    setResInfo(json?.data);
    //console.log(json);
    //console.log(json?.data?.cards[0]?.card?.card?.info);
  };
  useEffect(() => {
    getMenu();
    <MenuList />;
  }, []);

  const {
    id,
    uniqueId,
    cuisines,
    areaName,
    distance,
    sla,
    veg,
    name,
    cloudinaryImageId,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info || {}; //this is statement removes the error of name=null

  const { itemCards } =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return resInfo === null ? (
    <h1>loading</h1>
  ) : (
    <>
      <ul className="restaurants_mnu_info">
        <li>
          <h1>{name}</h1>
        </li>
        <li>
          <h3>{cuisines}</h3>
        </li>
        <li>
          <h3>
            {areaName + " " + distance + " "}
            {sla?.deliveryTime + " minutes"}
          </h3>
        </li>
        
        <li>{costForTwoMessage}</li>
      </ul>
      {/* --------------------------------------------- */}
      <ul className="item-list">
        {itemCards.map((item) => (
          
          <MenuList item={item} key={item?.card?.info?.id} />
        ))}
      </ul>
    </>
  );
};

export default Restaurant_Menu;
//uniqueId

/*
 {itemCards.map((item, index) => {
          const [imageId, name, price, description, id] =
            item?.card?.info || {};
          return (
            <ul>
              <li>
                <h1>{name}</h1>
              </li>
              <li>
                <img src={IMG_CDN_menu_url + imageId} />
              </li>
              <li>{price}</li>
              <li>{description}</li>
            </ul>
          );
        })}
 */
