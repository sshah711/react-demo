import React from "react";
import { CDN_URL } from "../constant/constantt";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  // console.log(resData);
  return (
    <div className="restaurant-card min-h-[630px] min-w-[300px] m-4 p-4 w-[250px] rounded-lg bg-gray-300  hover:bg-zinc-400">
      {/* <div className="restaurant-card inline-block relative" > */}
      <div className="">
      <h1 className="font-black absolute  bg-gradient-to-r from-black text-white  origin-bottom-left text-2xl ">
        {aggregatedDiscountInfoV3?.header} &nbsp;
        {aggregatedDiscountInfoV3?.subHeader}
      </h1>
      </div>
      

      <img
        className="res-logo rounded-lg min-h-[330px] min-w-[250px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      

      {/* </div> */}

      <h3 className="font-bold py-4 text-2xl">{name} </h3>
      <h4 className=" text-lg"> {cuisines.join(", ")}</h4>
      <h4 className="font-bold text-xl">{avgRating} ★</h4>
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

//higher order component

// export const plabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <h1 className="font-bold py-4 text-2xl ">
//         yhhh
//       </h1>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
