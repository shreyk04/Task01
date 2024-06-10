import React from "react";
import SectionHeader from "./SectionHeader";
import IconWithText from "./IconWithText";

function Services() {
  return (
    <div className="p-4 pt-10  flex flex-col text-left ">
      <div className="w-fit mx-auto">
        <SectionHeader text={"Services"} />
      </div>
      <h1 className="text-4xl font-semibold text-slate-500 py-4 mx-auto">
        Strive Only For The Best.{" "}
      </h1>
      <div className="flex flex-col md:flex-row w-full justify-center my-4">
        <IconWithText
          text={"High Class Security"}
          Icon={
            <div className="flex justify-center items-center bg-[#dbeafe] w-10 h-10 rounded-full text-center mx-2 border-2 border-[#60a5fa]">
              <i className="ri-shield-star-line text-[#60a5fa] text-2xl"></i>
            </div>
          }
        />
        <IconWithText
          text={"24 Hours Room Service"}
          Icon={
            <div className="flex justify-center items-center bg-[#fce7f3] w-10 h-10 rounded-full text-center mx-2 border-2 border-[#f472b6]">
              <i className="ri-24-hours-line text-[#f472b6] text-2xl"></i>
            </div>
          }
        />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center my-4 ">
        <IconWithText
          text={"Restaurant"}
          Icon={
            <div className="flex justify-center items-center bg-[#f3e8ff] w-10 h-10 rounded-full text-center mx-2 border-2 border-[#c084fc]">
              <i className="ri-restaurant-2-fill text-[#c084fc] text-2xl"></i>
            </div>
          }
        />
        <IconWithText
          text={"Tourist Guide Support"}
          Icon={
            <div className="flex justify-center items-center bg-[#ffe4e6] w-10 h-10 rounded-full text-center mx-2 border-2 border-[#fb7185]">
              <i className="ri-map-2-line text-[#fb7185] text-2xl"></i>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Services;
