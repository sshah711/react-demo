import React, { useContext } from "react";
import { CDN_URL } from "../constant/constantt";
import UserContext from "../constant/UserContext";
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
  const {loggedinUser} = useContext(UserContext);
  // console.log(resData);
  return (
    <div className="restaurant-card min-h-[500px] min-w-[300px] m-4 p-4 w-[250px] rounded-lg bg-gray-300 hover:scale-95">
      {/* <div className="restaurant-card inline-block relative" > */}
      <div className="relative">
        <h1 className="font-black absolute bg-gradient-to-r top-[168px] rounded-bl-lg from-black text-white text-2xl ">
          {aggregatedDiscountInfoV3?.header} &nbsp;
          {aggregatedDiscountInfoV3?.subHeader}
        </h1>
      </div>

      <div className="">
        <img
          className="res-logo rounded-lg h-[200px] w-[270px] "
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      {/* </div> */}

      <h3 className="font-bold py-4 text-2xl">{name} </h3>
      <h4 className=" text-lg"> {cuisines.join(", ")}</h4>
      <h4 className="font-bold text-xl">★ {avgRating} .  {sla.deliveryTime} mins</h4>
      <h4 className=" text-lg"> {costForTwo} </h4>
      <h4 className=" text-lg"></h4>
      <h4 className=" text-lg">User: {loggedinUser}</h4>
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
