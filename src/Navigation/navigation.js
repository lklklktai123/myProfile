import images from '../image/exportImage';
const navigation = () => {
  return (
    <div className="navigation">
      <img src={images.logo} />
      <nav className="navigation__nav-bar">
        <li>
          <a>#home</a>
        </li>
      </nav>
    </div>
  );
};
