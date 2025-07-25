import React from "react";
import classImg from "../assets/class.png";
import playground from "../assets/playground.png";
import swimming from "../assets/swimming.png";

const Q_Zone = () => {
  return (
    <div>
      <div className="bg-gray-200 p-3 rounded-xl">
        <p className="font-semibold"> Q-zone</p>
        <div className="flex flex-col items-center gap-4">
          <img className="w-full" src={swimming} alt="" />
          <img className="w-full" src={classImg} alt="" />
          <img className="w-full" src={playground} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Q_Zone;
