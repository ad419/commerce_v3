import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import demo from "../../images/demo.jpg";
import "../../../styles/_slider_customization.css";

const FullWidthSlider = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <OwlCarousel {...options} className="owl-theme" margin={10} nav>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
      <div class="item">
        <img width="60px" src={demo} alt="Product 1 just a prod" />
        <h2 className="card_title">Product 1 just a prod</h2>
        <h4 className="card_title">$55656</h4>
      </div>
    </OwlCarousel>
  );
};

export default FullWidthSlider;
