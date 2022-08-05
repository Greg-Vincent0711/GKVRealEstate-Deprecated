/**
 * @author Gregory Vincent
 * @date 5/17/22
 * Main file Index.js renders
 */
import React from "react";
import HomePage from "./homePage/homePage";
import AboutPage from "./aboutPage/aboutPage";
import "./App.css";
/**
 * @returns <ImageGallery />
 <AboutPage />
  <AboutPage />
 */
function App() {
  return (
    <div className="app-container">
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default App;
