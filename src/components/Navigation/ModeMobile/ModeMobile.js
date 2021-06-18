import MenuMobile from './MenuMobile/menuMobile';
import React, { useContext } from 'react';
import IconMenu from './MenuMobile/IconMenu/iconMenu';
import { ErrorContext } from '../../../Context/error-context';

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
      <MenuMobile />
    </div>
  );
};
export default ModeMobile;
