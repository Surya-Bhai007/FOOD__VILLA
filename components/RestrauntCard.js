import { IMG_CDN_URL } from "./config.js";
//----------CONFIG DRIVEN UI--------------
//const RestrauntCard = (props) => {
// const RestrauntCard = ({ restaurant }) => {
export const RestrauntCard = ({
  name,
  cuisines,
  totalRatingsString,
  cloudinaryImageId,
}) => {
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
        <h2>{totalRatingsString}⭐</h2>
      </div>

      {/* runs for normal function call as example
              <h1>{props.data?.name}</h1>
              <h2>{props.data?.cuisines.join(", ")}</h2>
              <h2>{props.data?.totalRatingsString}⭐</h2>
              <h2>{props.data?.totalRatingsString}⭐</h2> }
      
                   //hardcoded data    
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/1/171/364f7ce98d396ddabbd374f8c2f84953_o2_featured_v2.jpg?output-format=webp"
              alt="Mc Donald's Burger" 
            ></img>
            <h1>Mc Donald's</h1>
            <h2>Burger,Wraps,Fast Food,..</h2>
            <h2>4.3 ⭐</h2> }  */}
    </div>
  );
};
