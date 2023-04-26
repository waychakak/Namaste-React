import RestarantCard from "./RestaurantCard";
import { restrautList } from "../Constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

    function filterData(restaurants, searchText) {
        return restaurants.filter((rest) => rest?.data?.name?.toLowerCase()?.includes(searchText));
    }
const Body = () => {
    const [searchText,setSearchText] = useState();
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        // console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    // not render component (Early Return)
    if (!allRestaurants) return null; 

    // if(filterRestaurants?.length === 0) return <h1>No restaurant match to your filter</h1>

    return (allRestaurants?.length === 0 ) ? <Shimmer /> : (
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
           const data = filterData(allRestaurants, searchText);
           setFilterRestaurants(data);
         }}
         
        >Search</button>

        <div className="restaurantlist">
            {filterRestaurants.map((restaurant) => {
                return (
                    <Link to ={"/restaurant/" + restaurant.data.id} key={restaurant.data.id} >
                        <RestarantCard {...restaurant.data} />
                    </Link>
                );
            })}  
        </div>
        </>
    );
};

export default Body;