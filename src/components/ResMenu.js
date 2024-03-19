import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../constant/constantt";
const ResMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();
  // console.log(params);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId );
    const json = await data.json();

    console.log(json);
    setResMenu(json.data);
  };

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
  );
};

export default ResMenu;
