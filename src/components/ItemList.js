import React from "react";
import { CDN_URL } from "../constant/constantt";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {/* <ul className="p-2"> */}
      {items.map((item) => (
        <div
          className="m-2 p-2 flex justify-between border-b-2 border-gray-400 text-left "
          key={item.card.info.id}
        >
          <div className="px-4 w-9/12">
            <div className="py-2 ">
              <span className="font-medium">{item.card.info.name} </span>
              <br className=" " />

              <span>
                ₹ {item.card.info.price / 100 || item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs font-light text-black">
              {item.card.info.description}
            </p>
          </div>

          <div className=" w-3/12 p-4">
            
            <div className="absolute">
              <button className="p-2 rounded-lg inset-x-0 bottom-0 mx-11 bg-white shadow-lg "> Add+</button>
            </div>
            <img
              className=" w-full rounded-lg"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
      {/* </ul> */}
    </div>
  );
};

export default ItemList;
