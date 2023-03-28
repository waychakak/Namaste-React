import RestarantCard from "./RestaurantCard";
import { restrautList } from "../Constants";
import { useState } from "react";

    function filterData(restaurants, searchText) {
        return restaurants.filter((rest) => rest.data.name.includes(searchText));
    }
const Body = () => {
    const [searchText,setSearchText] = useState();
    const [restaurants, setRestaurants] = useState(restrautList);

    return(
        <>
        <input className="search-container" 
         type="text" placeholder="Search" 
         value={searchText}
         onChange={(e) => {
            setSearchText(e.target.value)}
         }
        />
        <button className="search-tn"
         onClick={() => {
           const data = filterData(restaurants, searchText);
           setRestaurants(data);
         }}
         
        >Search</button>

        <div className="restaurantlist">
            {restaurants.map((restaurant) => {
                return <RestarantCard {...restaurant.data} key={restaurant.data.id} />;
            })}  
        </div>
        </>
    );
};

export default Body;