import { ING_CDN_URL } from "../Constants";

const RestarantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
    // const } = restaurant.data;
      return(
          <div className="card">
              <img src={ING_CDN_URL +cloudinaryImageId} />
              <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h5>{lastMileTravelString} minutes</h5>
          </div>
      )
  }

  export default RestarantCard;