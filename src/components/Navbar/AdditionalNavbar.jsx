import React from "react";
import "../../styles/_additional_nav.css";
import { AiOutlineMenu } from "react-icons/ai";

const AdditionalNavbar = () => {
  return (
    <div className="sticky_add">
      <div className="additional_navbar">
        <ul className="nav_list">
          <li style={{ display: "flex", gap: "0.2rem" }}>
            <AiOutlineMenu />
            All
          </li>
          <li>Home</li>
          <li>Shop</li>
          <li>Features</li>
          <li>Daily Selection</li>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalNavbar;
