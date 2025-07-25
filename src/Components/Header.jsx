import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import LatestNews from "./LatestNews";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-5 gap-4">
        <img className="w-[300px]" src={logo} alt="" />
        <p className="text-gray-400">Journalism Without Fear or Favour</p>
        <p className="text-gray-400">{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Header;
