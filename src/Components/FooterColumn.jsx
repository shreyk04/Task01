import React from "react";

function FooterColumn({ title, links }) {
  return (
    <div className="w-full md:w-[20%] text-left">
      <h1 className="text-2xl  text-white my-4 uppercase">{title}</h1>
      <ul className="flex flex-col gap-5 text-lg ">
        {links.map((link) => (
          <li className="cursor-pointer underline">{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
