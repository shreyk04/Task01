import React from "react";
import SectionHeader from "./SectionHeader";

function GoogleMap() {
  return (
    <div
      className="flex flex-col items-center justify-center my-10"
      id="locate-us"
    >
      <SectionHeader>Locate Us</SectionHeader>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin"
        width="80%"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="rounded-md border shadow-lg"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
