import React from "react";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} alt=""/>
      </button>
    );
  }