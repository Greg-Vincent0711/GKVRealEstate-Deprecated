import React from "react";
import "./Popup.css";
function Popup(props) {
  //conditionally render the component based on the trigger value
  return props.trigger ? (
    <div className="Popup">
      <div className="Popup-inner">
        <button
          className="exit-btn fa-solid fa-xmark"
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        {/**Attributes of this component are defined where needed */}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
