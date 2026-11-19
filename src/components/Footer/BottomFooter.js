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
            <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li className="twitter">
            <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" aria-label="Google" target="_blank" rel="noopener noreferrer">
              <img src={google} alt="Google" />
            </a>
          </li>
          <li className="hide">
            <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" />
            </a>
          </li>
          <li className="hide">
            <a href="https://www.pinterest.com/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
              <img src={pinterest} alt="Pinterest" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomFooter;
