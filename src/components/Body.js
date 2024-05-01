import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText,setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json)
    // console.log("json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants");
    // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  // Conditional Rendering
//   if(listOfRestaurants.length === 0 ){
//     return (
//         <Shimmer/>
//     );
//   }

  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
            <button onClick={()=>{
                // console.log(searchText);

                const filteredRestaurants =  listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )

                setFilteredRestaurants(filteredRestaurants);

            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
                (res)=> res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
