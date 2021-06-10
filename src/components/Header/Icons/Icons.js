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
      <a href="/#" className="btn__link">
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
