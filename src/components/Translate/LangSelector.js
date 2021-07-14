import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import images from '../../image/exportImage';

const LangSelector = () => {
  const { i18n, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState('en');
  let selected = null;
  const changeLanguage = event => {
    console.log(event.target.value);
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  const changeLanguageHandler = () => {
    const overlay = document.querySelector('.overlay');
    const langContent = document.querySelector('.LangContent');
    overlay.classList.remove('hidden');
    langContent.classList.remove('hidden');
  };
  selected =
    selectedLang === 'en' ? (
      <img className="LangSelector__selected" src={images.eng} alt="eng" />
    ) : (
      <img className="LangSelector__selected" src={images.vn} alt="vn" />
    );
  return (
    <React.Fragment>
      <div className="LangSelector" onClick={changeLanguageHandler}>
        {selected}
      </div>
      <div onChange={changeLanguage} className="LangContent hidden">
        <p className="LangContent__title">{t('Selecte_Language')}</p>
        <div className="radio-block">
          <input
            type="radio"
            value="en"
            name="language"
            checked={selectedLang === 'en'}
            id="en"
            className="radio-input"
            readOnly
          />
          <label className="LangContent-child" htmlFor="en">
            <img src={images.eng} alt="en" />
          </label>
        </div>

        <div className="radio-block">
          <input
            type="radio"
            value="vn"
            name="language"
            checked={selectedLang === 'vn'}
            className="radio-input"
            readOnly
            id="vn"
          />
          <label className="LangContent-child" htmlFor="vn">
            <img src={images.vn} alt="vn" />
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LangSelector;