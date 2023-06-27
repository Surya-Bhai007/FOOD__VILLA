import { Link } from "react-router-dom";
import { Main_api_link } from "../assets/constants.js";
import { restaurant_list_hardcoded } from "../assets/constants.js";
import { RestaurantCard } from "./RestaurantCard.js";
import Shimmer from "./shimmer_ui.js";
import { useState, onChangeInput, useEffect } from "react";

function filterData(searchInput, restaurants) {
  const flt_Data = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return flt_Data;
}

const Body = () => {
  const [searchInput, setSearchInput] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // console.log("Calls when dependency has changed");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(Main_api_link);
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null; //Early return: not render component
  if (filteredRestaurants?.length === 0)
    return <h1>NO restaurant match your Search</h1>;
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search_container">
        <div>
          <input
            type="text"
            className="search_input"
            placeholder="search"
            value={searchInput}
            onChange={(e) => {
              /**
               *  search_Text = e.target.value;
               * we cant change value of variable directly in react
               * e.target.value =>whatever you write in input
               * In React, event.target.value is commonly used with the onChange event handler to get the current value of an input element in a component, and update the component's state accordingly.
               * reading and write both at same time called as Two way binding
               */
              setSearchInput(e.target.value); //updates the SearchInput ,writing
            }}
          />
          <button
            className="btn"
            onClick={() => {
              const data = filterData(searchInput, allRestaurants);
              setFilteredRestaurants(data);
              /**
             *need to filter the data
             const data =filterData(searchInput, restaurants);
             *update the state of restaurants state variable
             setRestaurants(data);
             */
            }}
          >
            Search {/*searchInput*/}
          </button>
        </div>
        <button
          className="Top_Rated"
          onClick={() => {
            const top = allRestaurants.filter(
              (item) => item?.data?.avgRating > 4.3
            );
            console.log(top, "top");
            setFilteredRestaurants(top);
          }}
        >
          Top_Rated
        </button>

        {/*using searchInput as normal variable in js */}
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              {" "}
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
