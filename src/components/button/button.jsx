import React from "react";
import "./button.css";
import { UpArrow } from "../../assets/icon";

const ScrollButton = ({ scrollToTop, scrollVisible }) => {
  return (
    <>
      <button
        className={
          "scrollButton" + (scrollVisible ? " scrollButtonVisible" : "")
        }
        onClick={scrollToTop}
      >
        <UpArrow />
      </button>
    </>
  );
};

export default ScrollButton;
