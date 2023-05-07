import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import {ING_CDN_URL} from '../Constants';
import useRestaurant from '../utils/useRestaurant';

const RestarantMenu = () => {
    const resId = useParams(); 
    const {id} = resId;

    const restarant = useRestaurant(id);

    //const [restarant, setRestarant] = useState({});
    
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