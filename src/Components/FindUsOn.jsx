import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const FindUsOn = () => {
  return (
    <div>
      <p className="font-semibold">Find Us On</p>
      <div className="join flex join-vertical border border-black rounded-xl">
        <button className="btn join-item justify-start bg-[#00000000] border-[#00000000] shadow-none text-black border border-b-black"><FaFacebook /> Facebook </button>
        <button className="btn join-item justify-start bg-[#00000000] border-[#00000000] shadow-none text-black border border-b-black"><FaSquareInstagram /> Instagram</button>
        <button className="btn join-item justify-start bg-[#00000000] border-[#00000000] shadow-none text-black "> <FaXTwitter/> X </button>
      </div>
    </div>
  );
};

export default FindUsOn;
