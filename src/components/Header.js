import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {

    // let btnName = "Login";

    const [btnName1,SetBtnName1] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="Food Logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login"
                onClick={()=>{
                // btnName = "Logout"
                btnName1 === "Login" ? SetBtnName1("Logout") : SetBtnName1("Login");
            }}>{btnName1}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;