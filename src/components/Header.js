import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../constant/constantt";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  //let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  // console.log("search");
  // useEffect(() => {
  //   console.log("useEffect");
  // }, [btnName]);

  return (
    <div className="header">
      <div className="logo-con">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

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
