/**
 * @author Greg Vincent
 * Template for each individual listing on the listings page
 * @date 6/28/22
 * Each individual listing will be an offshoot of the
 * image gallery component used for the homescreen
 */

/** This listing component is a temporary one to show
 * how the page will eventually look. But when it's fully
 * functional, all the data has to be dynamic, and come from
 * a backend.
 */

import ImageOne from "./listingImages/ListingOne/ListingOneImageOne.png";
import ImageTwo from "./listingImages/ListingOne/ListingOneImageTwo.png";
import ImageThree from "./listingImages/ListingOne/ListingOneImageThree.png";
import ImageFour from "./listingImages/ListingOne/ListingOneImageFour.png";
import ImageFive from "./listingImages/ListingOne/ListingOneImageFive.png";
import ImageSix from "./listingImages/ListingOne/ListingOneImageSix.png";
import ImageSeven from "./listingImages/ListingOne/ListingOneImageSeven.png";
import ImageEight from "./listingImages/ListingOne/ListingOneImageEight.png";
import ImageNine from "./listingImages/ListingOne/ListingOneImageNine.png";
import ImageTen from "./listingImages/ListingOne/ListingOneImageTen.png";

import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import React, { useState, useEffect } from "react";

const listingPictures = [
  {
    image: ImageOne,
    id: "Image#1",
  },
  {
    image: ImageTwo,
    id: "Image#2",
  },
  {
    image: ImageThree,
    id: "Image#3",
  },
  {
    image: ImageFour,
    id: "Image#4",
  },
  {
    image: ImageFive,
    id: "Image#5",
  },
  {
    image: ImageSix,
    id: "Image#6",
  },
  {
    image: ImageSeven,
    id: "Image#7",
  },
  {
    image: ImageEight,
    id: "Image#8",
  },
  {
    image: ImageNine,
    id: "Image#9",
  },
  {
    image: ImageTen,
    id: "Image#10",
  },
];

const Listing = () => {
  const [currentImg, setImg] = useState(0);
  const listingLength = listingPictures.length;

  //set the initial listing on page load
  useEffect(() => {
    setImg(0);
  }, []);

  /**logic for handling the next image*/
  const NextImg = () => {
    //check list position before incrementing
    setImg(currentImg === listingLength ? 0 : currentImg + 1);
  };

  /**logic for handling the previous image*/
  const PrevImg = () => {
    setImg(currentImg - 1 === -1 ? listingLength : currentImg - 1);
  };

  return (
    <div className="listing-container">
      <AiFillLeftCircle
        className="arrow left"
        onClick={nextImg}
      ></AiFillLeftCircle>
      <AiFillRightCircle
        className="arrow right"
        onClick={prevImg}
      ></AiFillRightCircle>
      {listingPictures.map((listing, index) => {
        return (
          <div
            className={index === currentImg ? "listing current" : "listing"}
          ></div>
        );
      })}
    </div>
  );
};

export default Listing;
