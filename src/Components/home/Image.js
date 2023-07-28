import React from "react";
import boredImage from "../../assets/images/bored.webp";
const Image = () => {
  return (
    <div className="border mt-5">
      <img src={boredImage} className="image h-80 xsm:hidden" alt="#" />
    </div>
  );
};

export default Image;
