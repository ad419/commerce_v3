import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  return (
    <div className="inline-block">
      <AwesomeSlider bullets={false} className="w h">
        <div>
          <img src={img1} alt="oke" />
        </div>
        <div>
          <img src={img2} alt="oke" />
        </div>
        <div>
          <img src={img3} alt="oke" />
        </div>
        <div>
          <img src={img4} alt="oke" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
