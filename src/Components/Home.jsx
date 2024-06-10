import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./Header";

function Home() {
  return (
    <div
      className={`w-full h-[100vh] flex flex-col items-center bg-blue-100 top-0 -mt-[3.5rem]`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}images/baranti.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* <Header /> */}
      <div className="h-full flex flex-col gap-7 justify-center items-center mt-5">
        <p className="text-2xl text-slate-100 opacity-90 backdrop-blur-sm px-10">
          Simple <span className="text-red-700">-</span> Unique{" "}
          <span className="text-red-700">-</span> Friendly
        </p>

        <h1 className="text-5xl w-full md:w-2/1 capitalize bg-[rgba(255,255,255,0.1)] backdrop-blur-md p-6 rounded-md text-slate-50 opacity-80 shadow-md">
          Make Yourself at home in our
          <div className=" bg-[rgba(238,65,17,0.1)] px-2 m-0 leading-2 text-[60px] mt-2 w-fit font-semibold mx-auto rounded-md gradient-text">
            guest house
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Home;
