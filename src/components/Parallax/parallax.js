import { useTranslation } from 'react-i18next';
const Parallax = () => {
  const { t } = useTranslation();
  const hireMeHandler = () => {
    const contact = document.querySelector('#contact');
    contact.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="parallax" id="parallax">
      <div className="parallax__container">
        <h4 className="parallax__title">
          {t('Are_you_wanna_work_with_me_You_can_hire_me')}
        </h4>
        <button className="parallax__btn" onClick={hireMeHandler}>
          {t('Hire_Me')}
        </button>
      </div>
    </div>
  );
};
export default Parallax;
