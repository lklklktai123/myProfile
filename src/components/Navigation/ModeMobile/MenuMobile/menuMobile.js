import { ErrorContext } from '../../../../Context/error-context';
import { useContext, useRef } from 'react';
import { ScrollToHandler } from '../../../../shared/utilities/helper';
import { useTranslation } from 'react-i18next';

const MenuMobile = props => {
  const { t } = useTranslation();
  const errCtx = useContext(ErrorContext);
  const linkRef = useRef();
  const handlerScrollTo = e => {
    document.getElementById('navi-toggle').checked = false;
    errCtx.toggleIcon(true);
    console.log(linkRef.current.getAttribute('href'));
    ScrollToHandler(e, linkRef.current.getAttribute('href'));
  };
  const listMenu = (
    <li
      className="mode-mobile__item"
      id={props.menuId}
      onClick={e => handlerScrollTo(e)}
    >
      <a href={`#${props.link}`} className="mode-mobile__link" ref={linkRef}>
        <span>0{props.index + 1}</span>
        {t(`${props.name}`)}
      </a>
    </li>
  );
  return listMenu;
};
export default MenuMobile;
