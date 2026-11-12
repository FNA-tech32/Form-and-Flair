import React from "react";
// images
import frame from "../../assets/Contact/Frame.png";

import man from "../../assets/Contact/man.svg";
import mail from "../../assets/Contact/mail.svg";
import phone from "../../assets/Contact/phone.svg";
import type from "../../assets/Contact/type.svg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <iframe
          width="520"
          height="535"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          title="Form &amp; Flair Location"
          src="https://maps.google.com/maps?width=520&amp;height=535&amp;hl=en&amp;q=742%20Fashion%20Avenue%2C%20New%20York%2C%20NY%2010018+(Form%20%26%20Flair)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="right">
        <img src={frame} alt="frame" className="frame" />
        <h2>Get In Touch</h2>
        <span></span>
        <p>
          Have any questions? Feel free to use the contact form below to get in
          <br />
          touch with us at Form &amp; Flair. We will answer you as soon as possible!
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input">
            <img src={man} alt="name icon" />
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input">
            <img src={mail} alt="email icon" />
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input">
            <img src={phone} alt="phone icon" />
            <input type="tel" placeholder="Your Phone (e.g. +1 555-234-5678)" required />
          </div>
          <div className="input">
            <img className="type" src={type} alt="message icon" />
            <textarea placeholder="Your Message" rows="4" required></textarea>
          </div>
          <div className="input">
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
