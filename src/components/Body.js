import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../constant/useOnlineStatus";
import useResCard from "../constant/useResCard";

const Body = () => {
  // const [resList, setResList] = useState([]);
  // const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const [resList, setResList] = useResCard([]);
  const [fil, setFil] = useResCard([]);

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

        {/* <RestaurantCard /> */}
      </div>
    </div>
  );
};
export default Body;
