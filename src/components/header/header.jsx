import React from "react";
import "./header.css";
import virtualize from "../../assets/virtualize.png";

const Header = () => {
  return (
    <div className="logo">
      <img src={virtualize} alt="virtualize" />
    </div>
  );
};

export default Header;
