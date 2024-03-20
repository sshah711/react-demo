import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../constant/constantt";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  // console.log(resData);
  return (
    <div className="restaurant-card min-h-[580px] min-w-[300px] m-4 p-4 w-[250px] rounded-lg bg-gray-300 hover:border border-solid border-black hover:bg-zinc-400">
      <img
        className="res-logo rounded-lg min-h-[330px] min-w-[250px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-4 text-2xl">{name} </h3>
      <h4 className=" text-lg"> {cuisines.join(", ")}</h4>
      <h4 className="font-bold text-lg">{avgRating} stars</h4>
      <h4 className=" text-lg"> {costForTwo}</h4>
      <h4 className=" text-lg">{sla.deliveryTime} mins</h4>
    </div>

    /*
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
</div>*/
  );
};
export default RestaurantCard;
