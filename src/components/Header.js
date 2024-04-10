import React from "react";
import { LOGO_URL } from "../constant/constantt";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../constant/useOnlineStatus";
import UserContext from "../constant/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  //let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // console.log("search");
  // useEffect(() => {
  //   console.log("useEffect");
  // }, [btnName]);
  const { loggedinUser } = useContext(UserContext);
  //console.log(data);

  //suscribing to the store using selector

  const cartItems = useSelector((store) => store.cart.items);
 // console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg m-3 ">
      <div className="logo-con">
        <img className="w-56 md:block" src={LOGO_URL} />
      </div>
      <div className="flex items-center justify-between ">
        <ul className="flex p-4 m-4 items-center ">
          <li className="px-4 font-medium text-xl ">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-4 font-medium text-xl cursor-pointer hover:text-blue-600 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-medium text-xl hover:text-blue-600 cursor-pointer ">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 font-medium text-xl hover:text-blue-600 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-medium text-xl hover:text-blue-600 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-medium text-xl  hover:text-blue-600 cursor-pointer">
            <Link to="/cart">Cart 🛒 - ( {cartItems.length} )</Link>
          </li>

          <button
            className="login p-4 bg-gray-300 rounded-md cursor-pointer font-medium text-xl hover:bg-blue-400"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              // console.log(btnName);
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold text-xl ">{loggedinUser}</li>
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
