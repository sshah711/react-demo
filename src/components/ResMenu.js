import React from "react";
//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { MENU_API } from "../constant/constantt";
import useResMenu from "../constant/useResMenu";
const ResMenu = () => {
  //const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();
  //costom Hook
  const resMenu = useResMenu(resId);

  // console.log(params);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();

  //   console.log(json);
  //   setResMenu(json.data);
  // };

  if (resMenu === null) {
    return <Shimmer />;
  }
  const { name, cuisines, avgRating, costForTwoMessage, areaName, sla } =
    resMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // const { name } = resMenu?.cards[0]?.card?.card?.info;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1 className="font-bold m-14 p-4 text-3xl">{name}</h1>

      <p className="font-medium m-4  text-base">{cuisines.join(", ")}</p>
      <p className="font-medium m-4  text-base">
        {areaName} , {sla.lastMileTravel} km
      </p>
      <h3 className="font-medium m-4 text-xl">
        {sla.deliveryTime} mins - {costForTwoMessage}
      </h3>
      <h3 className="font-bold m-4 text-xl">{avgRating} ⭐</h3>
      <ul className="">
        {itemCards.map((item) => (
          <li className="font-medium m-4 p-4 text-xl" key={item.card.info.id}>
            {item.card.info.name} <br/>
            {" Rs."} 
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );

 /* return (
    <div className="menu">
      <h1>{name}</h1>

      <p>{cuisines.join(", ")}</p>
      <p>
        {areaName} , {sla.lastMileTravel} km
      </p>
      <h3>
        {sla.deliveryTime} mins - {costForTwoMessage}
      </h3>
      <h3>{avgRating} stars </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );*/
};

export default ResMenu;
