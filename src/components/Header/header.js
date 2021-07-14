import Icons from './Icons/Icons';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
const Header = props => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.8,
  });
  const { t } = useTranslation();
  const navigation = document.querySelector('.navigation');
  const navBar = document.querySelector('.navigation__nav-bar');
  const menuHome = document.querySelector('#menu-home');
  const childBar = navBar ? navBar.childNodes : null;
  if (!inView) {
    navigation.classList.remove('hidden');
    if (childBar)
      childBar.forEach(menu => menu.classList.remove('border-bottom'));
    if (menuHome) menuHome.classList.add('border-bottom');
  } else {
    navigation.classList.add('hidden');
  }

  return (
    <header className="header" id="home" ref={ref}>
      <div className="header__container">
        <div className="header__container-text move-in-left">
          <h2 className="heading-2">{t('Hi_I_am')}</h2>
          <h1 className="heading-1">Phan Nguyễn Thành Tài</h1>
          <h2 className="heading-2">
            {t('I_am_a')} <span>Front End Developer</span>
          </h2>
        </div>
        <div className="header__container-btn move-in-bottom">
          <Icons />
        </div>

        <button className="btn-detail move-in-top">{t('Detail')}</button>
      </div>
    </header>
  );
};
export default Header;
