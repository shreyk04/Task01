import React from "react";

function SocialLinks() {
  return (
    <div className="flex items-center gap-2 social-links">
      <a href="#">
        <img src={process.env.PUBLIC_URL + "/images/youtube.png"} />
      </a>

      <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank">
        <img src={process.env.PUBLIC_URL + "/images/instagram.png"} />
      </a>
      <a href="#">
        <img src={process.env.PUBLIC_URL + "/images/twitter.png"} />
      </a>
      <a href="#">
        <img src={process.env.PUBLIC_URL + "/images/facebook.png"} />
      </a>
    </div>
  );
}

export default SocialLinks;
