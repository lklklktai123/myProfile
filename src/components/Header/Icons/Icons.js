import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from 'react-icons/fa';
const icons = () => {
  return (
    <React.Fragment>
      <a
        href="https://www.facebook.com/thanhtai.pn/"
        className="btn__link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF className="btn__link-icon" />
      </a>
      <a href="/#" className="btn__link">
        <FaTwitter className="btn__link-icon" />
      </a>
      <a href="/#" className="btn__link">
        <FaGooglePlusG className="btn__link-icon" />
      </a>
      <a href="/#" className="btn__link">
        <FaInstagram className="btn__link-icon" />
      </a>
    </React.Fragment>
  );
};
export default icons;
