/**
 * @author Greg Vincent
 * @date 6/28/22
 * Listings page for all possible tenant locations
 */
import "./listingsPage.css";
import Listing from "./Listing";
import React from "react";

/**Page is a group of listings. */

/**Eventually, a dynamically rendered list. For right now, an example. */
const ListingsPage = () => {
  return (
    <div className="listingPage-container fade-in">
      <h1>See what we have to offer below.</h1>
      <div className="listing" id="idOne">
        <Listing />
      </div>
      <div className="listing" id="idThree">
        <Listing />
      </div>
      <div className="listing" id="idThree">
        <Listing />
      </div>
      <div className="listing" id="idThree">
        <Listing />
      </div>
    </div>
  );
};

export default ListingsPage;
