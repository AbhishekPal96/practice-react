import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
      cloudinaryImageId,
    } = resData?.data; // ?. Optional chaining
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };

  export default RestaurantCard;