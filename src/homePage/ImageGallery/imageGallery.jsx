/**
 * @author Gregory Vincent
 * @date 6/18/2022
 * Image Gallery component for the homepage
 */

import ImageZero from "./GalleryImages/TestImageOne.png";
import ImageOne from "./GalleryImages/TestImageTwo.png";
import ImageTwo from "./GalleryImages/TestImageThree.png";
import React, { useState } from "react";
import "./imageGallery.css";

// var state = {
//   index: 0,
//   pictureList: [ImageZero, ImageOne, ImageTwo],
// };

/**
 * TODO - automatic image scrolling
 */
const ImageGallery = () => {
  const [index, setIndex] = useState(2);
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
      <div className="btnGroup">
        <button className="next " onClick={clickNext}></button>
      </div>
    </div>
  );
};

export default ImageGallery;

/**
 *<button classname="prev " onClick={clickNext}>
          N
        </button>
 */
