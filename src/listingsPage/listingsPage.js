/**
 * @author Greg Vincent
 * @date 6/28/22
 * Listings page for all possible tenant locations
 */
import "./listingsPage.css";
import Listing from "./Listing";
import React from "react";

/**Page is a group of listings. */
/**
 * TODO - finish the Listings Page Beta
 * Layout:
 * Stylized with flexbox
 * display: flex
 * justify-content(main axis): center or space-between
 * align-items; start to keep a consistent shape
 */
/**Eventually, a dynamically rendered list. For right now, an example. */
const ListingsPage = () => {
  return (
    <div className="listingPage-container">
      <div className="listing" id="idOne">
        <Listing />
      </div>
      <div className="listing" id="idThree">
        <Listing />
      </div>
      <div className="listing" id="idThree">
        <Listing />
      </div>
      <div className="listing" id="idFour">
        <Listing />
      </div>
    </div>
  );
};

export default ListingsPage;
