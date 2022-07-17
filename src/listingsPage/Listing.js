/**
 * @author Greg Vincent
 * Template for each individual listing on the listings page
 * @date 6/28/22
 * Each individual listing will be an offshoot of the
 * image gallery component used for the homescreen.
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
// import ImageSix from "./listingImages/ListingOne/ListingOneImageSix.png";
import ImageSeven from "./listingImages/ListingOne/ListingOneImageSeven.png";
import ImageEight from "./listingImages/ListingOne/ListingOneImageEight.png";
import ImageNine from "./listingImages/ListingOne/ListingOneImageNine.png";
import ImageTen from "./listingImages/ListingOne/ListingOneImageTen.png";

import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import "./listing.css"

const ListingPictures = [
  {
    image: ImageOne,
    id: "Image#1",
    Building: "2520 Watt Street, Unit 4",
    Cost: "$500 Per Month",
    Message: "Contact us for more information",
  },
  {
    image: ImageTwo,
    id: "Image#2",
    Building: "2520 Watt Street, Unit 4",
    Cost: "$500 Per Month",
    Message: "Contact us for more information",
  },
  {
    image: ImageThree,
    id: "Image#3",
    Building: "2520 Watt Street, Unit 4",
    Cost: "$500 Per Month",
    Message: "Contact us for more information",
  },
  {
    image: ImageFour,
    id: "Image#4",
    Building: "2520 Watt Street, Unit 4",
    Cost: "$500 Per Month",
    Message: "Contact us for more information",
  },
  {
    image: ImageFive,
    id: "Image#5",
    Building: "2520 Watt Street, Unit 4",
    Cost: "$500 Per Month",
    Message: "Contact us for more information",
  },
  {
    image: ImageSeven,
    id: "Image#7",
    Building: "2520 Watt Street, Unit 4",
    Cost: "$500 Per Month",
    Message: "Contact us for more information",
  },
  {
    image: ImageEight,
    id: "Image#8",
    Building: "2520 Watt Street, Unit 4",
    Cost: "$500 Per Month",
    Message: "Contact us for more information",
  },
  {
    image: ImageNine,
    id: "Image#9",
    Building: "2520 Watt Street, Unit 4",
    Cost: "$500 Per Month",
    Message: "Contact us for more information",
  },
  {
    image: ImageTen,
    id: "Image#10",
    Building: "2520 Watt Street, Unit 4",
    Cost: "$500 Per Month",
    Message: "Contact us for more information",
  },
];


const Listing = () => {
  const [currentImg, setImg] = useState(0);
  const listingLength = ListingPictures.length - 1;

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
      {ListingPictures.map((listing, index) => {
        return (
          <div
            className={index === currentImg ? "focused" : "unfocused"}
            key={index}
          >
            {index === currentImg && (
              <div className="listing-info">
              <AiFillLeftCircle
                className="arrow"
                id="left"
                onClick={NextImg}
              />
              <AiFillRightCircle
              className="arrow" id="right"
              onClick={PrevImg}
            />
                <img src={listing.image} id="image" alt="alt" />
                  <ul>
                    <li><h2 id="liOne">{listing.Building}</h2></li>
                    <li><h2 id="liTwo">{listing.Cost}</h2></li>
                    <li><h2 id="liThree">{listing.Message}</h2></li>
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

/**l
 *  
 * TODO 
 */
