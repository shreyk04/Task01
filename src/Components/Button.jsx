import React from "react";

function Button() {
  const handleOpenWhatsAppClick = () => {
    window.open("https://wa.link/at5ion", "_blank");
  };
  return (
    <button
      className=" button p-2 w-36  text-white rounded-md font-[Poppins] "
      onClick={handleOpenWhatsAppClick}
    >
      Book Now
    </button>
  );
}

export default Button;
