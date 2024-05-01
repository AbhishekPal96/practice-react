import {LOGO_URL} from "../utils/constants";
import {useState} from "react";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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