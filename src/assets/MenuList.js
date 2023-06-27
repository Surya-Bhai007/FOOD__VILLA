import { IMG_CDN_menu_url } from "./constants";
export const MenuList = ({ item }) => {
  const { defaultPrice,imageId, name, price, description, id ,isVeg} = item?.card?.info || {};
  return (
    <>
      <hr />
      <ul className="menu_item">
        <div>
        <li>
          <img
            className="veg-non-vegLogo"
            src={
              isVeg
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVd5eIsffJML1voS4OWpUw1XpUOXoGeZLTjQ&usqp=CAU"
                : "https://w7.pngwing.com/pngs/815/552/png-transparent-lentil-soup-veggie-burger-vegetarianism-vegetarian-and-non-vegetarian-marks-non-veg-food-miscellaneous-angle-food-thumbnail.png"
            }
          />
        </li>
          <li>
            <h2>{name}</h2>
          </li>
          <h3>💴{price !=={} ? price/ 100 : defaultPrice}</h3>
          <h4>{description}</h4>
        </div>

        <img src={IMG_CDN_menu_url + imageId} className="menu-item-img" />
      </ul>
    </>
  );
};
