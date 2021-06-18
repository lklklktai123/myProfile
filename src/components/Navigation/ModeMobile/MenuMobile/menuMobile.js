import { ErrorContext } from '../../../../Context/error-context';
import { useContext } from 'react';
import { dataMenu } from '../../../../shared/utilities/config';
import { ScrollToHandler } from '../../../../shared/utilities/helper';

const MenuMobile = () => {
  const errCtx = useContext(ErrorContext);
  const handlerScrollTo = e => {
    document.getElementById('navi-toggle').checked = false;
    errCtx.toggleIcon(true);
    console.log(errCtx.statusIcon);
    ScrollToHandler(e);
  };
  const listMenu = dataMenu.map((menu, index) => (
    <li
      className="mode-mobile__item"
      id={menu.idMenu}
      key={`menu${index}`}
      onClick={e => handlerScrollTo(e)}
    >
      <a href={`#${menu.link}`} className="mode-mobile__link">
        <span>0{index + 1}</span>
        {menu.name}
      </a>
    </li>
  ));
  return (
    <nav className="mode-mobile__nav">
      <ul className="mode-mobile__list">{listMenu}</ul>
    </nav>
  );
};
export default MenuMobile;
