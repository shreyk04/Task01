import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const images = [
  "ayodhya.webp",
  "baranti.webp",
  "flower.jpg",
  "large.jpg",
  "recep.jpg",
  "out.jpg",
  "small.jpg",
  "large.jpg",
  "palash.webp",
  "mithonDam.webp"
];
const Image = ({ src }) => {
  return (
    <img
      className="h-[80vh] w-[90vw] object-cover"
      src={process.env.PUBLIC_URL + "/images/" + src}
    />
  );
};

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div className="pt-10">
      <SectionHeader text={"Gallery"} />
      <div className="relative ">
        {/* carousel to show all images */}
        <Carousel
          showThumbs={false}
          onChange={(item) => setSelectedItem(item)}
          selectedItem={selectedItem}
          renderArrowNext={(e, hasNext) => {
            console.log(e);
            return hasNext ? (
              <i
                className="ri-arrow-right-s-line cursor-pointer absolute top-64 right-10 text-4xl  z-50 rounded-full bg-gradient-to-r from-[#fdfbfb] to-[#c2c5c7]"
                onClick={() => e()}
              ></i>
            ) : null;
          }}
          renderArrowPrev={(e, hasPrev) =>
            hasPrev ? (
              <i
                className="ri-arrow-left-s-line  cursor-pointer absolute top-64 left-10 text-4xl  z-50  rounded-full bg-gradient-to-r from-[#fdfbfb] to-[#c2c5c7]"
                onClick={() => e()}
              ></i>
            ) : null
          }
        >
          {images.map((img) => (
            <Image src={img} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
