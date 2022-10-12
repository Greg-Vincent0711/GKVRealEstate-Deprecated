/**
 * @author Greg Vincent
 * @date 5/18/22
 *Input form for the homepage
 */

import React from "react";
import { useState } from "react";
import "./Home-PageBtn.css";
import Popup from "./popup-component/Popup";
/**
 * Whenever a user clicks access my info,
 * a popup comes up to ask them to regiser or login - update 10/1/22
 * https://mustafaawwal1.medium.com/awesome-animated-popup-in-react-using-css-transitions-only-efd9fd32956c
 * good article for popup animations 10/11/22
 */
function HomePageBtn() {
  const [showPopup, setshowPopup] = useState(false);
  return (
    <div className="btn-contaner">
      <button
        className="fade-in submitBtn"
        onClick={() => {
          setshowPopup(true);
        }}
      >
        Access My Info
      </button>
      <div className="popup-component">
        <Popup trigger={showPopup} setTrigger={setshowPopup}>
          <h1>Register Button Here</h1>
          <h1>Login Below Form Here</h1>
        </Popup>
      </div>
    </div>
  );
}

export default HomePageBtn;
