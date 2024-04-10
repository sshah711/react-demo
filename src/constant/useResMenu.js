import React from "react";
import { useEffect, useState } from "react";
import { MENU_API } from "../constant/constantt";
const useResMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

     console.log(json);
    setResMenu(json.data);
  };

  return resMenu;
};

export default useResMenu;
