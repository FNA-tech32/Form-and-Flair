import React from "react";
import BottomFooter from "./BottomFooter";
// images
import footer1 from "../../assets/Footer/icon1.svg";
import footer2 from "../../assets/Footer/icon2.svg";
import footer3 from "../../assets/Footer/icon3.svg";

const TopFooter = () => {
  return (
    <>
      <div className="top-footer">
        <div className="container">
          <div className="item">
            <h3>About</h3>
            <span></span>
            <p>
              Form &amp; Flair has been offering an extensive range of premier nail
              services, modern nail art, and restorative skin treatments with unmatched artistry.
            </p>
          </div>
          <div className="item">
            <h3>Recent Articles</h3>
            <span></span>
            <h4>
              Top 5 Reasons to Visit Form &amp; Flair Studio
              <p>June 10, 2026 / 3 Comments</p>
            </h4>
            <h4>
              Behind the Scenes with Our Nail Artists
              <p>June 12, 2026 / 5 Comments</p>
            </h4>
          </div>
          <div className="item">
            <h3>Opening Hours</h3>
            <span></span>
            <p>
              Mon-Fri: 9:00 AM – 8:00 PM <br />
              Saturday: 9:00 AM – 6:00 PM <br />
              Sunday: 10:00 AM – 4:00 PM
            </p>
          </div>
          <div className="item">
            <h3>Contact Details</h3>
            <span></span>
            <div className="loc">
              <img src={footer1} alt="address" />
              <h4>742 Fashion Ave, New York, NY 10018</h4>
            </div>
            <div className="loc">
              <img src={footer2} alt="primary phone" />
              <h4>Main: +1 (555) 234-5678</h4>
            </div>
            <div className="loc">
              <img src={footer2} alt="alternative phone" />
              <h4>Alt: +1 (555) 876-5432</h4>
            </div>
            <div className="loc">
              <img src={footer3} alt="primary email" />
              <h4>info@formandflair.com</h4>
            </div>
            <div className="loc">
              <img src={footer3} alt="alternative email" />
              <h4>booking@formandflair.com</h4>
            </div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </>
  );
};

export default TopFooter;
