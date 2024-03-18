import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../constant/constantt";
import { useState } from "react";
const Header = () => {
  //let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-con">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              // console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
