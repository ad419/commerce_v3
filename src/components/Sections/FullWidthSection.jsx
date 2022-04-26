import React from "react";
import FullWidthSlider from "../Sliders/FullWidthSlider/FullWidthSlider";
import "../../styles/_slider_customization.css";

const FullWidthSection = () => {
  return (
    <div className="wraper">
      <h2>Inspired by your browsing history</h2>
      <FullWidthSlider />
    </div>
  );
};

export default FullWidthSection;
