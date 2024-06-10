import React from "react";

function IconWithText({ text, Icon }) {
  return (
    <div className="flex justify-start items-center mx-4  p-2 w-fit md:w-[90] gradient-bg rounded-md my-2 pr-10">
      {Icon}
      <p className="text-xl text-slate-500 font-semibold">{text}</p>
    </div>
  );
}

export default IconWithText;
