import React from "react";
import SectionHeader from "./SectionHeader";
import Showcase from "./Showcase";

function RoomsSection() {
  return (
    <div className="py-10 bg-gray-100">
      <SectionHeader text={"Our Living Room"} />
      <h1 className="text-4xl font-semibold text-slate-500 my-5">
        The Most Memorable Rest Time Starts Here.
      </h1>

      <div className="flex flex-col md:flex-row w-full px-8    my-10 gap-20">
        <Showcase
          image={process.env.PUBLIC_URL + "/images/large.jpg"}
          heading={"Cozy Haven Room"}
          description={
            "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation."
          }
          price={"1000"}
        />

        <Showcase
          image={process.env.PUBLIC_URL + "/images/small.jpg"}
          heading={"Spacious Serenity Suite"}
          description={
            "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance."
          }
          price={"1500"}
        />
      </div>
    </div>
  );
}

export default RoomsSection;
