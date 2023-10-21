import React, { useState } from "react";
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
import { HiDotsVertical } from "react-icons/hi";
import Headeritem from "./Headeritem";

export default function Header() {
  const [toggle, setToggle] = useState(false);
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

  const handleExpanding = ()=>{
    toggle?setToggle(false):setToggle(true);
  };

  return (
    <div className=" bg-[#141421] flex justify-between items-center p-5 ">
      <div className="flex item-centre gap-8">
        <img
          src={logo}
          alt="Disney+hostar"
          className="w-[80px] md:w-[115px] object-cover cursor-pointer"
        />
        <div className="hidden md:flex item-centre min-[995]:gap-8 ">
          {symb.map((item) => (
            <Headeritem key={item.id} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden item-centre gap-3">
          {symb.map(
            (item, index) =>
              index <= 2 && (
                <Headeritem key={item.id} name={''} Icon={item.icon} />
              )
          )}
          <div className="text-white">
          <HiDotsVertical className="cursor-pointer" onClick={handleExpanding}/>
          {toggle? <div className="absolute mt-3 border-[0.5px] border-[grey] rounded p-3 py-5 ">
          {symb.map(
            (item, index) =>
              index > 2 && (
                <Headeritem key={item.id} name={item.name} Icon={item.icon} />
              )
          )}
          </div> : null }
</div>
        </div>
      </div>
      <img
        src={profile}
        alt="profile pic"
        className="w-[40px] h-[40px] object-cover rounded-full cursor-pointer "
      />
    </div>
  );
}
