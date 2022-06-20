/**
 * @author Gregory Vincent
 * @date 6/18/2022
 * Image Gallery component for the homepage
 */

import ImageOne from "./GalleryImages/TestImageOne.png";
import ImageTwo from "./GalleryImages/TestImageTwo.png";
import ImageThree from "./GalleryImages/TestImageThree.png";
import React, { useState } from "react";
import "./imageGallery.css";

// var state = {
//   index: 0,
//   pictureList: [ImageOne, ImageTwo, ImageThree],
// };

/**ImageThree */

const ImageGallery = () => {
  const [index, setIndex] = useState(1);
  const pictureList = [ImageOne, ImageTwo, ImageThree];

  function updateIndex(mathSymbol) {
    switch (mathSymbol) {
      case "decrement":
        setIndex(index - 1);
        break;
      case "increment":
        setIndex(index + 1);
        break;
      case "toZero":
        setIndex(index - index);
        break;
      case "EOA":
        setIndex(0 + pictureList.length - 1);
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
      setIndex(updateIndex("toZero"));
    } else {
      setIndex(updateIndex("decrement"));
    }
  };

  return (
    <div className="main-container">
      <img src={pictureList[index]} alt="test" />
      <div className="btn-container">
        <button className="next " onClick={clickPrev}>
          P
        </button>
        <button classname="prev " onClick={clickNext}>
          N
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;

