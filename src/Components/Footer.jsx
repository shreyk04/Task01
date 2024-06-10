import React from "react";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";

function Footer() {
  const quickLinks = [
    "Browse Destinations",
    "Special Offers and Packages",
    "Room Types & Amenities",
    "Travel Tips & Guides"
  ];
  const services = [
    "Concierge Assistance",
    "Flexible Booking Options",
    "Airport Transfers",
    "Wellness & Recreation"
  ];
  const contact = [
    "Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156",
    "        kkghosh0099@gmail.com",
    "+91 9007062180",
    <SocialLinks />
  ];
  return (
    <div className="w-full  bg-[#0c0a09] text-[#78716c]">
      <div className="flex flex-col md:flex-row  p-8 gap-4 w-full justify-around">
        <div className="w-full md:w-[20%]">
          <h1 className="  text-2xl text-white my-4">Kingsukh Guest House</h1>
          <p className="md:w-60 text-lg text-left">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary
          </p>
        </div>
        <FooterColumn title={"Quick Links"} links={quickLinks} />
        <FooterColumn title={"Our Services"} links={services} />
        <FooterColumn title={"Contact us"} links={contact} />
      </div>
      <div class="footer__bar p-2">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
