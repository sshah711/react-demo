import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resOBJ from "../constant/data";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(resOBJ);

  let resList2 = [
    {
      info: {
        id: "168122",
        name: "McDonald's",
        cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
        locality: "SARGASAN CROSS ROAD",
        areaName: "GANDHINAGAR",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        sla: {
          deliveryTime: 32,
        },
      },
    },
    {
      info: {
        id: "168123",
        name: "Dominos",
        cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
        locality: "SARGASAN CROSS ROAD",
        areaName: "GANDHINAGAR",
        costForTwo: "₹400 for two",
        cuisines: ["Beverages", "Cafe", "Desserts"],
        avgRating: 3.3,
        avgRatingString: "3.3",
        sla: {
          deliveryTime: 32,
        },
      },
    },
    {
      info: {
        id: "168124",
        name: "KFC",
        cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
        locality: "SARGASAN CROSS ROAD",
        areaName: "GANDHINAGAR",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.1,
        avgRatingString: "4.1",
        sla: {
          deliveryTime: 32,
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //logic
            // console.log("Button Clicked");
            //resList = resList.filter((res) => res.info.avgRating > 4);
            setResList(resList.filter((res) => res.info.avgRating > 4.3));
            console.log(resList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-con">
        {resList.map((r) => (
          <RestaurantCard key={r.info.id} resData={r} />
        ))}

        {/* <RestaurantCard /> */}
      </div>
    </div>
  );
};
export default Body;
