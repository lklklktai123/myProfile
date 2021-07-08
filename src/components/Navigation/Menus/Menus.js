import Menu from './Menu/Menu';
import { dataMenu } from '../../../shared/utilities/config';
import { ScrollToHandler } from '../../../shared/utilities/helper';
import { useTranslation } from 'react-i18next';
const Menus = () => {
  const { t } = useTranslation();
  return (
    <ul className="navigation__nav-bar">
      {dataMenu.map((menu, index) => (
        <Menu
          key={`menu${index}`}
          link={menu.link}
          name={t(menu.name)}
          idMenu={menu.idMenu}
          clicked={e => ScrollToHandler(e)}
        />
      ))}
    </ul>
  );
};
export default Menus;
