/**
 * @author Gregory Vincent
 * home-page component
 */
 import React from 'react';
import "./homePage.css";
import HomePageBtn from "./Home-PageBtn/Home-PageBtn";
import ImageGallery from "./ImageGallery/imageGallery";
/**
 * TODO - get images to show up, style them
 * TODO - change the website's color palette to match the images
 * TODO - Slider for all the images on the homepage
 */
function HomePage() {
  return (
    <div className="homepage-container">
      <ImageGallery />
      <h1 className="tagLine fade-inTag">Welcome to our community.</h1>
      <h3 className=" h3 fade-in">
        Tenants, click the link below to see your information.
      </h3>
      <HomePageBtn />
    </div>
  );
}

/**
 * <img src={TestImage} alt="test" className="fade-in" />
 */
export default HomePage;
