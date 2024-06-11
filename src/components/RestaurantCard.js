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
      // <div className="p-4 m-4 w-[250px]" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="p-4 m-4 w-[250px] bg-gray-50 hover:bg-gray-100">
        <img
          className="rounded-lg"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="res-logo"
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        {/* <h4>{aggregatedDiscountInfoV3.header}</h4> */}
      </div>
    );
  };

  export default RestaurantCard;