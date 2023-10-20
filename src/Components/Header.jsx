import React from "react";
import logo from "./../assets/Images/logo.png";
import profile from "/logo2.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlus,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import Headeritem from "./Headeritem";

export default function Header() {
  const symb = [
    {
      id: 1,
      name: "HOME",
      icon: HiHome,
    },
    {
      id: 2,
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    { id: 3, name: "WATCH LIST", icon: HiPlus },
    { id: 4, name: "ORIGINALS", icon: HiStar },
    { id: 5, name: "MOVIES", icon: HiPlayCircle },
    { id: 6, name: "SERIES", icon: HiTv },
  ];
  return (
    <div className=" bg-[#141421] flex justify-between items-center p-5 ">
      <div className="flex item-centre gap-8">
        <img
          src={logo}
          alt="Disney+hostar"
          className="w-[80px] md:w-[115px] object-cover cursor-pointer"
        />
        <div className="flex item-centre gap-8">
          {symb.map((item) => (
            <Headeritem key={item.id} name={item.name} Icon={item.icon} />
          ))}
        </div>
      </div>
      <img src={profile} alt="profile pic" className="w-[50px] rounded-full cursor-pointer " />
    </div>
  );
}
