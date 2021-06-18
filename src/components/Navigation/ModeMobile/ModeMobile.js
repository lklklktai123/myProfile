import MenuMobile from './MenuMobile/menuMobile';
import React, { useState } from 'react';
import IconMenu from './MenuMobile/IconMenu/iconMenu';
const ModeMobile = () => {
  const [toggleIcon, setToggleIcon] = useState(true);

  const toogleClick = value => {
    setToggleIcon(!value);
  };
  return (
    <div className="mode-mobile">
      <input
        type="checkbox"
        className="mode-mobile__checkbox hidden"
        id="navi-toggle"
      />
      <div className="mode-mobile__background"></div>
      <IconMenu check={toggleIcon} clicked={() => toogleClick(toggleIcon)} />
      <MenuMobile />
    </div>
  );
};
export default ModeMobile;
