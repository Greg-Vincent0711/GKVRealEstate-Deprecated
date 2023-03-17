/**
 * @author Gregory Vincent
 * @date 5/24/22
 * About Page for Real Estate website
 */

import React, { useRef, useEffect, useState } from "react";
import "./aboutPage.css";

const AboutPage = () => {
  //Keeping track of a fixed point on the page
  const h1Ref = useRef();
  //state is used to store the value of the observer
  const [h1Visible, set_h1Visible] = useState();
  // console.log(h1Visible);
  useEffect(() => {
    //intersection observer needs a callback function to fire once an intersection is found
    const scrollObserver = new IntersectionObserver((entries) => {
      //observer only will work with one entry, a fixed point on the page
      const entry = entries[0];
      set_h1Visible(entry.isIntersecting);
    });
    //h1Ref represents that fixed point.
    scrollObserver.observe(h1Ref.current);
  }, []);
  return (
    <div className="main-container">
      <div id="textBlock-One">
        <h1 className={h1Visible ? "visible" : "invisible"} ref={h1Ref}>
          About the owners of GKVRealEstate
        </h1>
        <p className={h1Visible ? "visible" : "invisible"} ref={h1Ref}>
          GKVRealEstate is the collective effort of two highly educated people
          looking to build longterm wealth for themselves, children and
          descendants far into the future through smart investments.
        </p>
      </div>
      {/**Text block about the website creator and Real Estate. Bottom right quadrant of the page */}
      <div id="textBlock-Two">
        <h1 className={h1Visible ? "visible" : "invisible"} ref={h1Ref}>
          Real Estate Investing and our Values
        </h1>
        <p className={h1Visible ? "visible" : "invisible"} ref={h1Ref}>
          {" "}
          To anybody with the means to get into such a practice, Real Estate
          Investing can serve as a way to secure yourself and family
          financially. However (and we can't stress this enough), it is not
          solely about collecting a check. At the end of the day, people's
          livelihoods are somewhat within your hands, which is why it is much
          more important to form honest and amicable relationships with tenants,
          so that both parties are satisfied.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
