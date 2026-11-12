import React from "react";

import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import logo from "../../assets/Footer/logo.png";

const BottomFooter = () => {
  return (
    <div className="bottom-footer">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Form & Flair" />
        </div>
        <div className="title">
          <p>© 2026 Form &amp; Flair. All Rights Reserved. Privacy Policy</p>
        </div>
        <ul className="icons">
          <li>
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li className="twitter">
            <a href="#" aria-label="Twitter">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Google">
              <img src={google} alt="Google" />
            </a>
          </li>
          <li className="hide">
            <a href="#" aria-label="YouTube">
              <img src={youtube} alt="YouTube" />
            </a>
          </li>
          <li className="hide">
            <a href="#" aria-label="Pinterest">
              <img src={pinterest} alt="Pinterest" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomFooter;
