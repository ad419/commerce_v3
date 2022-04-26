import React from "react";
import ImgCarousel from "../Sliders/ImagesCarousel/ImgCarousel";
import "../../styles/_slider_customization.css";
const ImageSection = () => {
  return (
    <div className="warper">
      <div>
        <h1 className="seccond_heading">
          Frequently repurchased in Beauty and Personal Care
        </h1>
      </div>
      <ImgCarousel />
    </div>
  );
};

export default ImageSection;
