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
import ImageSeven from "./listingImages/ListingOne/ListingOneImageSeven.png";
import ImageEight from "./listingImages/ListingOne/ListingOneImageEight.png";
import ImageNine from "./listingImages/ListingOne/ListingOneImageNine.png";
import ImageTen from "./listingImages/ListingOne/ListingOneImageTen.png";

import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import "./listing.css";

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

const listingInfo = [
  {
    Building: "2520 Watt Street, Unit 4",
    Cost: "$500 per month",
    Message: "Contact us for more info!"
  }
]

const Listing = () => {
  const [currentImg, setImg] = useState(0);
  const listingLength = listingPictures.length - 1;

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
        onClick={NextImg}
      />
      <AiFillRightCircle
        className="arrow right"
        onClick={PrevImg}
      />
      {listingPictures.map((listing, index) => {
        return (
          <div
            className={index === currentImg ? "listing current" : "listing"}
            key={index}
          >
           {index === currentImg && (
            <div>
            <img src ={listing.image}/>
            {/**Image above, here is the information about the listing */}
            {/**Since each image is for the same listing, you only need one source of info.*/}
            {/**Eventually, it should be dynamic to reflect what listing is being looked at */}
            <ul>
              <li>{listingInfo.Building}</li>
              <li>{listingInfo.Cost}</li>
              <li>{listingInfo.Message}</li>
            </ul>
            </div>
           )}
          </div>
        );
      })}
    </div>
  );
};

export default Listing;
