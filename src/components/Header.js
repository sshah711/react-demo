import React from "react";
import { LOGO_URL } from "../constant/constantt";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../constant/useOnlineStatus";

const Header = () => {
  //let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // console.log("search");
  // useEffect(() => {
  //   console.log("useEffect");
  // }, [btnName]);

  return (
    <div className="flex justify-between shadow-lg m-3 ">
      <div className="logo-con">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center justify-between ">
        <ul className="flex p-4 m-4 items-center ">
          <li className="px-4 font-medium text-xl ">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4 font-medium text-xl hover:underline cursor-pointer ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-medium text-xl hover:underline cursor-pointer ">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 font-medium text-xl hover:underline cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-medium text-xl hover:underline cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-medium text-xl hover:underline cursor-pointer">
            <Link to="/cart">Cart</Link>
          </li>

          <button
            className="login p-4 bg-gray-300 rounded-md cursor-pointer font-medium text-xl hover:border border-solid border-black"
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


/*  return (
    <div className="header">
      <div className="logo-con">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul>
          <li className="os">Online Status: {onlineStatus ? "✅" : "❌"}</li>
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
            <Link to="/grocery">Grocery</Link>
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
  ); */
};

export default Header;
