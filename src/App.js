/**
 * @author Gregory Vincent
 * @date 5/17/22
 * Main file Index.js renders
 */
import React from 'react'
import HomePage from "./homePage/homePage";
import NavBar from "./NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./aboutPage/aboutPage";
import ContactPage from "./contactPage/contactPage";
import listingsPage from "./listingsPage/listingsPage"
/**
 * @returns <ImageGallery />
 */
function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/listingsPage" element={<listingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
