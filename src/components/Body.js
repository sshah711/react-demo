import React, { useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../constant/useOnlineStatus";
import useResCard from "../constant/useResCard";
import UserContext from "../constant/UserContext";
// aggregatedDiscountInfoV3: Object { header: "60% OFF", subHeader: "UPTO ₹120" }
const Body = () => {
  // const [resList, setResList] = useState([]);
  // const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const [resList, setResList] = useResCard([]);
  const [fil, setFil] = useResCard([]);
  // console.log("rendered", resList);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        You are not connected to the network. Please check your internet
        connection....
      </h1>
    );

  const { loggedinUser, setUserName } = useContext(UserContext);

  if (resList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div data-testid="resCard" className="body shadow-md">
      <div className="filter flex justify-center  ">
        <div className="search my-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="   Search for restaurant, cuisine or a dish"
            className="hover:bg-gray-200 border border-solid border-black rounded-md h-10 w-[470px] mr-[20px]"
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
            className="my-5 px-4 py-2 bg-gray-300 rounded-md font-medium text-xl hover:bg-blue-400"
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
            className="filter-btn mx-1 p-2.5 bg-gray-300 rounded-md font-medium text-lg hover:bg-blue-400 "
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
        <div className="search mx-4 flex items-center">
          <label className="font-medium text-lg">UserName : </label>
          <input
            className=" mx-3  border border-black rounded-md h-10"
            value={loggedinUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="restaurant-con flex flex-wrap justify-center shadow-lg ">
        {fil.map((r) => (
          <Link key={r.info.id} to={"/restaurants/" + r.info.id}>
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
