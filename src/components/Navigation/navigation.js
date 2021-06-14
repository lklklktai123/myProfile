import images from '../../image/exportImage';
const navigation = () => {
  return (
    <div className="navigation hidden">
      <img src={images.logo} alt="logo" className="navigation__logo" />
      <ul className="navigation__nav-bar">
        <li>
          <a href="#id">Home</a>
        </li>
        <li>
          <a href="#id">About</a>
        </li>
        <li>
          <a href="#id">EXPERIENCE</a>
        </li>
        <li>
          <a href="#id">EDUCATION</a>
        </li>
        <li>
          <a href="#id">COURSE</a>
        </li>
        <li>
          <a href="#id">contact</a>
        </li>
      </ul>
    </div>
  );
};
export default navigation;
