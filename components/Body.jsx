import { restraunt_list } from "./config.js";
import { RestrauntCard } from "./RestrauntCard.js";
import { useState, onChangeInput } from "react";

/**    *why do we use these
 * what is state
 * what is react hooks? -function
 * what is useState
 * @returns
 */

function filterData(searchInput,restaurants) {
  const flt_Data= restaurants.filter((restraunt)=>restraunt.data.name.includes(searchInput));
  return flt_Data;
}

const Body = () => {
  //let search_Txt = "hello"; local variable in js
  const [searchInput, setSearchInput] = useState();
  const [restaurants, setRestaurants] = useState(restraunt_list);
  /**
   * useState(): returns=>an array [variableName(here searchInput),func to update the variable (here setSearchInput)]
   * const [searchInput, setSearchInput] this is destructuring the array return form useState().
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

  return (
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
             * reading and write both at same time called as Two way binding
             */
            setSearchInput(e.target.value); //updates the SearchInput ,writing
          }}
        />
        <button
          className="btn"
          onClick={() => {
            

            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
            /**
             *need to filter the data
             const data =filterData(searchInput, restaurants);
             *update the state of restaurants variable
             setRestaurants(data);
             */
          }}
        >
          Search {/*searchInput*/}
        </button>
        {/*using searchInput as normal variable in js */}
      </div>

      <div className="restrauntlist">
        {restaurants.map((restraunt) => {
          return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />;
        })}

        {/* <RestrauntCard {...restraunt_list[0].data} />
      <RestrauntCard {...restraunt_list[1].data} />
      <RestrauntCard {...restraunt_list[2].data} /> */}

        {/**      different methods 
      *  <RestrauntCard restaurant={restraunt_list[2]} />
      *  {RestrauntCard(restraunt_list[1])} <->with normal function call works same as below 
      
        */}
      </div>
    </>
  );
};
export default Body;
