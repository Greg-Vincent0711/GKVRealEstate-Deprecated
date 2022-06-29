/**
 * @author Gregory Vincent
 * @date 6/18/2022
 * Image Gallery component for the homepage
 */

import ImageZero from "./Images/TestImageOne.png";
import ImageOne from "./Images/TestImageTwo.png";
import ImageTwo from "./Images/TestImageThree.png";
import React, { useState } from "react";
import "./imageGallery.css";

/**
 * TODO - automatic image scrolling
 */
const ImageGallery = () => {
  const [index, setIndex] = useState(0);
  const pictureList = [ImageZero, ImageOne, ImageTwo];

  function updateIndex(mathSymbol) {
    switch (mathSymbol) {
      case "decrement":
        setIndex(index - 1);
        break;
      case "increment":
        setIndex(index + 1);
        break;
      case "toZero":
        setIndex(0);
        break;
      case "EOA":
        setIndex(pictureList.length - 1);
        break;
      default:
        return 0;
    }
  }

  /**logic for handling the next image*/
  const clickNext = () => {
    //check list position before incrementing
    if (index + 1 === pictureList.length) {
      setIndex(updateIndex("toZero"));
    } else {
      updateIndex("increment");
    }
  };

  /**logic for handling the previous image*/
  const clickPrev = () => {
    if (index - 1 === -1) {
      setIndex(updateIndex("EOA"));
    } else {
      setIndex(updateIndex("decrement"));
    }
  };

  return (
    <div className="img-main-container">
      <img src={pictureList[index]} alt="test" />
      <h1 className="tagLine fade-inTag">Welcome to our community.</h1>
      <h3 className=" h3 fade-in">
        Tenants, click the link below to see your information.
      </h3>
      <div className="btnGroup"></div>
    </div>
  );
};

/*functions refer to all fade in animations*/

export default ImageGallery;

// <button className="next " onClick={clickNext}></button>;
/**
 *<button classname="prev " onClick={clickNext}>
          N
        </button>
 */
