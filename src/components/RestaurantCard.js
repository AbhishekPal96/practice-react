import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);


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
      <div data-testid="resCard" className="p-4 m-4 w-[250px] bg-gray-50 hover:bg-gray-100">
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

export const promotedLabelCard = (RestaurantCard) => {
  return (props) => {
    return (
     <div>
        <label className="absolute bg-black text-white rounded-lg p-2 m-2">Promoted</label>
        <RestaurantCard {...props}/>
     </div> 
    )
  }
};

export default RestaurantCard;