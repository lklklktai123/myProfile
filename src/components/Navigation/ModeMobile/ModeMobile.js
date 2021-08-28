import MenuMobile from './MenuMobile/menuMobile';
import React, { useContext } from 'react';
import IconMenu from './MenuMobile/IconMenu/iconMenu';
import { ErrorContext } from '../../../Context/error-context';
import { dataMenu } from '../../../shared/utilities/config';

const ModeMobile = () => {
  const errorCtx = useContext(ErrorContext);
  return (
    <div className="mode-mobile">
      <input
        type="checkbox"
        className="mode-mobile__checkbox hidden"
        id="navi-toggle"
      />
      <div className="mode-mobile__background"></div>
      <IconMenu
        check={errorCtx.statusIcon}
        clicked={() => errorCtx.toggleIcon(!errorCtx.statusIcon)}
      />
      <nav className="mode-mobile__nav">
        <ul className="mode-mobile__list">
          {dataMenu.map((menu, index) => (
            <MenuMobile
              link={menu.link}
              idMenu={menu.idMenu}
              name={menu.name}
              key={`menu${index}`}
              index={index}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default ModeMobile;
