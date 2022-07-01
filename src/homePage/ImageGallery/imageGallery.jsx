/**
 * @author Gregory Vincent
 * @date 6/18/2022
 * Image Gallery component for the homepage
 */

/**Picture Imports */
import ImageZero from "./Images/TestImageOne.png";
import ImageOne from "./Images/TestImageTwo.png";
import ImageTwo from "./Images/TestImageThree.png";
import PropImageOne from "./Images/PropImage#1.png";
import PropImageTwo from "./Images/PropImage#2.png";
import PropImageThree from "./Images/PropImage#3.png";

/**React Imports */
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import "./imageGallery.css";

/**
 * TODO - automatic image scrolling
 */


 const pictureList = [
  //Each image is a js object for dynamic info
  {
    //Each heading will correspond to a building address
    //right now they're placeholders
    "image": ImageZero,
    "heading": "Zero Image",
    "Address": "2520 Watt Street",
  },
  {
    "image": ImageOne,
    "heading": "First Image",
    "Address": "2521 Watt Street",
  },
  {
    "image": ImageTwo,
    "heading": "Second Image",
    "Address": "2522 Watt Street",
  },
  {
    "image": PropImageOne,
    "heading": "Third Image",
    "Address": "2523 Watt Street",
  },
  {
    "image": PropImageTwo,
    "heading": "Fourth Image",
    "Address": "2524 Watt Street",
  },
  {
    "image": PropImageThree,
    "heading": "Fifth Image",
    "Address": "2525 Watt Street",
  },
];


const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const picListLength = pictureList.length - 1;
  //always start at first image on load
  useEffect(() => {
    setCurrentImage(0)
  }, [])

  //used for auto scroll feature
  const scroll = true;
  let picInterval;
  let interval = 6000; //6 sec

function auto(){
  picInterval = setInterval(NextImg, interval);
}


  useEffect(() => {
    if(scroll){
      auto()
    }
    return () => clearInterval(picInterval)
  }, [currentImage])

/**logic for handling the next image*/
const NextImg = () => {
  //check list position before incrementing
  setCurrentImage(currentImage === picListLength ? 0 : currentImage + 1)
};

/**logic for handling the previous image*/
const PrevImg = () => {
  setCurrentImage(currentImage - 1 === -1 ? picListLength : currentImage - 1)
};

  return (
    <div className="img-main-container">
      <AiOutlineArrowLeft className="arrow prev" onClick={PrevImg} />
      <AiOutlineArrowRight className="arrow next"onClick={NextImg} />
      {pictureList.map((picture, index) => {
        return (
          <div
            className={index === currentImage ? "picture current" : "picture"}
            key={index}
          >
            {index === currentImage && (
              <div>
                <img src={picture.image} alt="nice" />
                <div className="picture-info">
                  <h2>{picture.Address}</h2>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ImageGallery;



