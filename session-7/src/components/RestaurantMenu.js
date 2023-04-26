import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import {ING_CDN_URL} from '../Constants';

const RestarantMenu = () => {
    const resId = useParams(); 
    const {id} = resId;

    const [restarant, setRestarant] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.668545&lng=74.225864&restaurantId="+id+"&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data);
        setRestarant(json?.data?.cards[0]?.card?.card?.info);
    }
    
    return !restarant ? (
        <h2>UI is loading</h2>
    ) :  (
        <>
            <h1>Restaurant id : {id} </h1>
            <h2>{restarant?.name}</h2>
            <img src={ING_CDN_URL + restarant.cloudinaryImageId} />
            <h4>{restarant.areaName}</h4>
            <h5>{restarant.city}</h5>
            <h5>{restarant.avgRating}</h5>
            <h5>{restarant.cuisines}</h5>
        </>
    )
}


export default RestarantMenu;