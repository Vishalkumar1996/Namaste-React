import { CDN_URL } from "../utils/constants";

const RestroCard = ({ resData }) => {
    const {name, avgRating, cuisines, costForTwo, deliveryTime, cloudinaryImageId} = resData?.data
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="resName">{name}</h3>
      <h4 className="resCuisine">{cuisines.join(", ")}</h4>
      <h4 className="resCost">₹{costForTwo/ 100} For Two</h4>
      <h4 className="resDeliveryTime">{deliveryTime} Minutes</h4>
      <h4 className="resAvgRating">{avgRating} Stars</h4>
    
    </div>
  );
  };
  
  export default RestroCard;