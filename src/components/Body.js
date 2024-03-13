import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resOBJ from "../constant/data";
const Body = () => {
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="restaurant-con">
          {
            resOBJ.map((r)=>(
              <RestaurantCard key={r.info.id} resData={r} />
            ))
          }
         
          {/* <RestaurantCard /> */}
        </div>
      </div>
    );
  };
  export default Body; 