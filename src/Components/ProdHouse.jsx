import React from "react";
import marvelV from "./../assets/Videos/marvel.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";
import starWarsV from "./../assets/Videos/star-wars.mp4";
import marvelI from "./../assets/Images/marvel.png";
import disneyI from "./../assets/Images/disney.png";
import nationalGeographicI from "./../assets/Images/nationalG.png";
import pixarI from "./../assets/Images/pixar.png";
import starWarsI from "./../assets/Images/starwar.png";

export default function ProdHouse() {
  const prodHouseList = [
    {
      key: 1,
      image: disneyI,
      video: disneyV,
    },
    {
      key: 2,
      image: pixarI,
      video: pixarV,
    },
    {
      key: 3,
      image: marvelI,
      video: marvelV,
    },
    {
      key: 4,
      image: starWarsI,
      video: starWarsV,
    },
    {
      key: 5,
      image: nationalGeographicI,
      video: nationalGeographicV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {prodHouseList.map((item, index) => (
        <div className="border-[2px] border-grey rounded-xl hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out relative shadow-xl shadow-gray-800">
           <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50"
          ></video>
          <img src={item.image} alt="..." className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
}
