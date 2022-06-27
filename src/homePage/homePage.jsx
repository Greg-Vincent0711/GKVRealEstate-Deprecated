/**
 * @author Gregory Vincent
 * home-page component
 */
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
      <HomePageBtn />
    </div>
  );
}

/**
 * <img src={TestImage} alt="test" className="fade-in" />
 */
export default HomePage;
