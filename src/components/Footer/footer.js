import images from '../../image/exportImage';
import Icons from '../Header/Icons/Icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <img src={images.logo} alt="logo" className="footer__img" />
      <p className="normal-text footer__coppyright">
        © {t('Copyright')} 2021 {t('by')}
        <span style={{ textDecoration: 'underline' }}>ThanhTai</span>.
        {t(
          'Use_for_learning_or_your_portfolio_Dont_use_to_teach_Dont_claim_as_your_own'
        )}
        .
      </p>
      <p className="footer__coppyright"></p>
      <div className="header__container-btn">
        <Icons />
      </div>
    </footer>
  );
};
export default Footer;
