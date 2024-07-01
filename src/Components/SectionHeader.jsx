import React from "react";

function SectionHeader({ children, text }) {
  return (
    <div className=" font-semibold text-xl uppercase my-6  px-2 text-red-600 	 underline underline-offset-4	">
      {children}
      {text}
      
    </div>
  );
}

export default SectionHeader;
