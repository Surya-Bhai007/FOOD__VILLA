import { restraunt_list } from "./config.js";
import { RestrauntCard } from "./RestrauntCard.js";
import Shimmer from "./shimmer_ui.js";
import { useState, onChangeInput, useEffect } from "react";

/**    *why do we use these
 * what is state
 * what is react hooks? -function
 * what is useState
 * @returns
 */

function filterData(searchInput, restaurants) {
  const flt_Data = restaurants.filter((restraunt) =>
    restraunt?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return flt_Data;
}

const Body = () => {
  //let search_Txt = "hello"; local variable in js
  const [searchInput, setSearchInput] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  /**
   *  state in React is an object that holds data that can change over time
   * State is a fundamental concept in React, and is often used to manage data that is specific to a single component
   * useState(): returns=>an array [variableName(here searchInput),func to update the variable (here setSearchInput)]
   * const [searchInput, setSearchInput] this is destructuring the array returned form useState().
   *  We can do something like this also 
      const searchVar =useState();
      const [searchInput, setSearchInput]=searchVar; 
   *
   * local state variable in react,
   * here is setSearchInput func used for modification of searchInput(it is just normal local variable),given by useState()  hook
   * 
   * THIS IS EQUIVALENT
   * let search_Txt =DEFAULT_VALUE;  in js
    const [searchInput, setSearchInput] = useState(DEFAULT_VALUE);IN REACT
   */

  useEffect(() => {
    // console.log("Calls when dependency has changed");
    getRestaurants();
  }, []);

  /**    useEffect()
   * EMPTY  dependencies array => call_back func called once after render;
   * [searchText]=> once after initial render + every-time after re-render (my searchText changes)
   *
   */

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.737096&lng=77.1406069&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();

    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null; //Early return: not render component
  if (filteredRestaurants?.length === 0)
    return <h1>NO restaurant match your filter</h1>;
  return (allRestaurants?.length === 0) ? (
    <Shimmer />
  ) : (
    <>
      <div className="search_container">
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
        {/*using searchInput as normal variable in js */}
      </div>

      <div className="restrauntlist">
        {filteredRestaurants.map((restraunt) => {
          return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />;
        })}

        {/** In JavaScript, ... is the spread syntax, which is a shorthand way of passing multiple values
          to a function or component, or combining multiple objects or arrays into a single object or array.
         *  <RestrauntCard {...restraunt_list[0].data} />
         * <RestrauntCard {...restraunt_list[1].data} />
         * <RestrauntCard {...restraunt_list[2].data} />
         * */}

        {/**      different methods 
      *  <RestrauntCard restaurant={restraunt_list[2]} />
      *  {RestrauntCard(restraunt_list[1])} <->with normal function call works same as below 
      
        */}
      </div>
    </>
  );
};
export default Body;
