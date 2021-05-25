import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from 'react-icons/fa';
const header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-text">
          <h2 className="heading-2">Hi,I am</h2>
          <h1 className="heading-1">Phan Nguyễn Thành Tài</h1>
          <h2 className="heading-2">
            I am a <span>Front End Developer</span>
          </h2>
        </div>
        <div className="header__container-btn">
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
        </div>
        <button className="btn-detail">Detail</button>
      </div>
    </header>
  );
};
export default header;
