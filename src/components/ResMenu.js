import React, { useState } from "react";
//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { MENU_API } from "../constant/constantt";
import useResMenu from "../constant/useResMenu";
import ResCategory from "./ResCategory";
const ResMenu = () => {
  //const [resMenu, setResMenu] = useState(null);
  const [showIndex, setShowIndex] = useState(null);
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
    resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // const { name } = resMenu?.cards[0]?.card?.card?.info;
  console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="menu text-center">
      <h1 className="font-bold m-6 px-3 py-2 text-3xl">{name}</h1>

      <p className="font-medium mx-8 my-2  text-lg">{cuisines.join(", ")}</p>
      <p className="font-medium mx-8 my-2  text-lg">
        {areaName} , {sla.lastMileTravel} km
      </p>
      <h3 className="font-medium mx-8 my-2  text-xl">
        {sla.deliveryTime} mins - {costForTwoMessage}
      </h3>
      <h3 className="font-bold mx-8 my-2  text-xl">{avgRating} ★</h3>
      {/* <ul className="p-2">
        {itemCards.map((item) => (
          <li className="font-medium mx-8 my-2 text-xl" key={item.card.info.id}>
            {item.card.info.name} <br className=" m-1 p-4" />
            {" Rs."}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
      {categories.map((cat, index) => (
        //controlled component
        <ResCategory
          key={cat?.card?.card.title}
          data={cat?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index) }
        />
      ))}
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
