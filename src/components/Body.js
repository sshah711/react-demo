import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../constant/useOnlineStatus";
import useResCard from "../constant/useResCard";

// aggregatedDiscountInfoV3: Object { header: "60% OFF", subHeader: "UPTO ₹120" }
const Body = () => {
  // const [resList, setResList] = useState([]);
  // const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const [resList, setResList] = useResCard([]);
  const [fil, setFil] = useResCard([]);
 console.log("rendered",resList)
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        You are not connected to the network. Please check your internet
        connection....
      </h1>
    );

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body shadow-md">
      <div className="filter flex justify-center  ">
        <div className="search my-4 p-4">
          <input
            type="text" placeholder="   Search for restaurant, cuisine or a dish"
            
            className="hover:bg-gray-200 border border-solid border-black rounded-md h-10 w-[870px] mr-[60px]"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              const resFil = resList.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFil(resFil);
            }}
          />
          <button
            className="my-5 px-4 py-2 bg-gray-300  m-4 rounded-md font-medium text-xl hover:bg-blue-400"
            onClick={() => {
              //console.log(search);
              const resFil = resList.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFil(resFil);
            }}
          >
            Search
          </button>
        </div>

        <div className="search  flex items-center">
          <button
            className="filter-btn p-2.5 bg-gray-300 rounded-md font-medium text-lg hover:bg-blue-400 "
            onClick={() => {
              //logic
              // console.log("Button Clicked");
              //resList = resList.filter((res) => res.info.avgRating > 4);
              setFil(resList.filter((res) => res.info.avgRating > 4.3));
              //  console.log(resList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="restaurant-con flex flex-wrap justify-center shadow-lg ">
        {fil.map((r) => (
          <Link key={r.info.id} to={"/restaurants/" + r.info.id}>
            {" "}
            <RestaurantCard resData={r} />
          </Link>
        ))}

        {/* <RestaurantCard /> */}
      </div>
    </div>
  );

  /*
  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //console.log(search);
              const resFil = resList.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFil(resFil);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //logic
            // console.log("Button Clicked");
            //resList = resList.filter((res) => res.info.avgRating > 4);
            setFil(resList.filter((res) => res.info.avgRating > 4.3));
            //  console.log(resList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-con">
        {fil.map((r) => (
          <Link key={r.info.id} to={"/restaurants/" + r.info.id}>
            {" "}
            <RestaurantCard resData={r} />
          </Link>
        ))}

      </div>
    </div>
  ); */
};
export default Body;
