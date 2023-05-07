import { useEffect,useState } from "react";

const useRestauant = (id) => {
    const [restarant, setRestarant] = useState(null);
    
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.668545&lng=74.225864&restaurantId="+id+"&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data);
        setRestarant(json?.data?.cards[0]?.card?.card?.info);
    }

    return restarant;
};

export default useRestauant;