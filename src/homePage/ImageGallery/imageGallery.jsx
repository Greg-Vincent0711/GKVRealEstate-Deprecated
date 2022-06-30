/**
 * @author Gregory Vincent
 * @date 6/18/2022
 * Image Gallery component for the homepage
 */

import ImageZero from "./Images/TestImageOne.png";
import ImageOne from "./Images/TestImageTwo.png";
import ImageTwo from "./Images/TestImageThree.png";
import PropImageOne from "./Images/PropImage#1.png";
import PropImageTwo from "./Images/PropImage#2.png";
import PropImageThree from "./Images/PropImage#3.png";
import React, { useState } from "react";
import "./imageGallery.css";
// import { render } from "@testing-library/react";

/**
 * TODO - automatic image scrolling
 */
const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const pictureList = [
    //each image can be represented as a js object
    {
      //Each heading will correspond to a building address
      //right now they're placeholders
      image: ImageZero,
      heading: "Zero Image",
      Address: "2521 Watt Street",
    },
    {
      image: ImageOne,
      heading: "First Image",
      Address: "2522 Watt Street",
    },
    {
      image: ImageTwo,
      heading: "Second Image",
      Address: "2523 Watt Street",
    },
    {
      image: PropImageOne,
      heading: "Third Image",
      Address: "2524 Watt Street",
    },
    {
      image: PropImageTwo,
      heading: "Fourth Image",
      Address: "2525 Watt Street",
    },
    {
      image: PropImageThree,
      heading: "Fifth Image",
      Address: "2520 Watt Street",
    },
  ];

  return (
    <div className="img-main-container">
      <h1 className="tagLine fade-inTag">Welcome to our community.</h1>
      <h3 className=" h3 fade-in">
        Tenants, click the link below to see your information.
      </h3>
      {pictureList.map((picture, index) => {
        return (
          <div
            className={index === currentImage ? "picture current" : "picture"}
            key={index}
          >
            {index === currentImage && (
              <div>
                <img src={picture.image} alt="picture" />
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

/*functions refer to all fade in animations*/
// function updateImage(mathSymbol) {
//   switch (mathSymbol) {
//     case "-":
//       setCurrentImage((currentImage -= 1));
//       break;
//     case "+":
//       setCurrentImage((currentImage += 1));
//       console.log("currentImage is a plus sign");
//       break;
//     case "0":
//       setCurrentImage(0);
//       break;
//     case "E":
//       setCurrentImage(pictureList.length - 1);
//       break;
//     default:
//       return 0;
//   }
// }

/**logic for handling the next image*/
// const NextImg = () => {
//   //check list position before incrementing
//   if (currentImage + 1 === pictureList.length) {
//     setCurrentImage(updateImage("toZero"));
//   } else {
//     updateImage("increment");
//   }
// };

// /**logic for handling the previous image*/
// const PrevImg = () => {
//   if (currentImage - 1 === -1) {
//     setCurrentImage(updateImage("EOA"));
//   } else {
//     setCurrentImage(updateImage("decrement"));
//   }
// };

// function imageSwitch() {
//   if (currentImage === pictureList.length - 1) {
//     updateImage("0");
//     console.log(currentImage);
//   }
//   updateImage("+");
//   console.log(currentImage);
// }
// function autoGallery() {
//   setInterval((imageSwitch, 5000));
//   return currentImage;
// }
// <button className="next " onClick={clickNext}></button>;
/**
 *<button classname="prev " onClick={clickNext}>
          N
        </button>
 */
