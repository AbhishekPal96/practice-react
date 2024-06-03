import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      name,
      cuisines,
      avgRating,
      costForTwo,
      aggregatedDiscountInfoV3,
      cloudinaryImageId,
    } = resData?.info; // ?. Optional chaining
    return (
      <div className="res-card" style={{ backgroundColor: "white" }}>
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
        <h4>{costForTwo}</h4>
        {/* <h4>{aggregatedDiscountInfoV3.header}</h4> */}
      </div>
    );
  };

  export default RestaurantCard;