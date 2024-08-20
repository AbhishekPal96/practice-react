import {LOGO_URL} from "../utils/constants";
import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    // let btnName = "Login";

    const [btnName1,SetBtnName1] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="flex justify-between bg-green-50 sm:bg-yellow-100 lg:bg-pink-100">
        <div className="logo-container"> 
          <img
            className="w-56"
            src={LOGO_URL}
            alt="Food Logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4" >
            <li className="px-4">OnlineStatus : {onlineStatus ? "✅" : "🔴"} </li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold"><Link to="/cart">Cart-{cartItems.length}</Link></li>
            <button className="login"
                onClick={()=>{
                // btnName = "Logout"
                btnName1 === "Login" ? SetBtnName1("Logout") : SetBtnName1("Login");
            }}>{btnName1}</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;