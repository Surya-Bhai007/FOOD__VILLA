import { IMG_CDN_URL } from "../assets/constants";
//----------CONFIG DRIVEN UI--------------
//const RestrauntCard = (props) => {
// const RestrauntCard = ({ restaurant }) => {
export const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  id,
}) => {
  console.log(id);
  //const { name, cuisines, totalRatingsString, cloudinaryImageId } =restaurant.data;
  return (
    <div className="card">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Mc restraunt_list's Burger"
      ></img>
      <div className="card_text">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{avgRating}⭐</h2>
      </div>
    </div>
  );
};
