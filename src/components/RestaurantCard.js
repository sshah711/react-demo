import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../constant/constantt";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  // console.log(resData);
  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name} </h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4> {costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      {/* <h4>4.4 stars</h4> */}
    </div>
  );
};
export default RestaurantCard;
