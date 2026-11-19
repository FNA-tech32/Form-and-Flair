import React from "react";
// icons
import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import cart from "../../assets/icons/cart.svg";

const TopNav = ({ openoScial, setOpenSocial }) => {
  return (
    <div
      style={openoScial ? { right: 0 } : { right: "-100%" }}
      className="top-nav"
    >
      <i
        onClick={() => setOpenSocial(!openoScial)}
        className="fas fa-times"
      ></i>
      <div className="container">
        <div className="first-description">
          <h4 className="call">
            Free Call: <span>+1 (555) 234-5678</span> | Alt: <span>+1 (555) 876-5432</span>
          </h4>
          <h4 className="opening">
            Opening Hours: <span>Mon-Fri: 9 am-8 pm</span>
          </h4>
        </div>
        <div className="last-description">
          <div className="lang">
            <h4 className="en">
              <a href="#en">En</a>
            </h4>
            <h4 className="ru">
              <a href="#ru">Ru</a>
            </h4>
          </div>
          <ul className="social">
            <li>
              <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.google.com/" aria-label="Google" target="_blank" rel="noopener noreferrer">
                <img src={google} alt="Google" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YouTube" />
              </a>
            </li>
            <li className="hidden">
              <a href="https://www.pinterest.com/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <img src={pinterest} alt="Pinterest" />
              </a>
            </li>
            <li className="hidden">
              <a href="#cart" aria-label="Cart">
                <img src={cart} alt="Cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Task for me: icons hover effect

export default TopNav;
