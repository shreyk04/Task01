import React from "react";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

function About() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full px-8 py-10 bg-gray-100">
      <div className="w-full h-full flex justify-center items-center pt-10">
        <img
          className="w-full h-[95vh] rounded-md  object-cover"
          src={process.env.PUBLIC_URL + "/images/out.jpg"}
        />
      </div>
      <div className="flex flex-col w-full  gap-4 p-4  max-w-full text-left md:ml-10">
        <SectionHeader text={"About Us"} />
        <h1 className="text-4xl font-semibold text-slate-500">
          The Best Holidays Start Here!
        </h1>
        <p className="text-gray-500 text-xl leading-10  ">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
          the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
          Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
          captivating Panchat Dam. Revel in the embrace of comfort, relish
          delightful meals, and unwind in our verdant garden oasis. Your ideal
          retreat beckons, promising a harmonious blend of nature's beauty and
          heartfelt hospitality. Explore the hidden gems of Purulia, creating
          memories that linger long after your stay.
        </p>
        <div className="text-blue-500">
          <span className="text-blue-900 font-semibold">Address</span>: Beside
          Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
        </div>
        <div className="text-blue-500">
          <span className="text-blue-900 font-semibold">Contact us</span>:+91
          9007062180
        </div>
        <Button />
      </div>
    </div>
  );
}

export default About;
