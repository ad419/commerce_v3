import React, { useState, useEffect } from "react";
import "../../styles/_navbar.css";
import { FiSearch } from "react-icons/fi";
import AdditionalNavbar from "./AdditionalNavbar";
import { AiOutlineMenu } from "react-icons/ai";
import CartIcon from "../svg/CartIcon";
import Logo from "../svg/Logo";
import Sidebar from "./Sidebar";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${open ? "block" : "hiden"}`}>
        <Sidebar />
      </div>
      <div className="sticky">
        <div className="navbar">
          <div style={{ cursor: "pointer" }} className="menu_icon">
            {open ? (
              <div className="icon_btn" onClick={() => setOpen(false)}>
                <AiOutlineClose size={25} color="white" />
              </div>
            ) : (
              <div className="icon_btn" onClick={() => setOpen(true)}>
                <AiOutlineMenu size={25} color="white" />
              </div>
            )}
          </div>
          <div style={{ cursor: "pointer", zIndex: 10 }} className="logo_icon">
            <Logo />
          </div>
          <div className="search_group">
            <input placeholder="Search any product" type="text" />
            <div className="search_icon">
              <FiSearch size={19} style={{ marginTop: "0.31rem" }} />
            </div>
            <div className="cart_icon">
              <h1
                style={{
                  position: "absolute",
                  color: "wheat",
                  marginLeft: 16,
                  marginTop: 1,
                  fontSize: 23,
                }}
              >
                o
              </h1>
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
      <AdditionalNavbar />
    </>
  );
};

export default Navbar;
