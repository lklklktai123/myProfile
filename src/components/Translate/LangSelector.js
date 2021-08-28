import React, { useState, useContext, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import images from '../../image/exportImage';
import { ErrorContext } from '../../Context/error-context';
import Overlay from '../Overlay/overlay';

const LangSelector = () => {
  const errorCtx = useContext(ErrorContext);
  const { i18n, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState('en');
  const [isShow, setIsShow] = useState(false);
  let selected = null;
  const changeLanguage = event => {
    if (event.target.value === 'vn') {
      errorCtx.cvIsVn(true);
    } else {
      errorCtx.cvIsVn(false);
    }
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  const changeLanguageHandler = () => {
    setIsShow(true);
  };
  const hideSelectedHandler = () => {
    setIsShow(false);
  };
  selected =
    selectedLang === 'en' ? (
      <img className="LangSelector__selected" src={images.eng} alt="eng" />
    ) : (
      <img className="LangSelector__selected" src={images.vn} alt="vn" />
    );
  return (
    <Fragment>
      <div className="LangSelector" onClick={changeLanguageHandler}>
        {selected}
      </div>
      {isShow && (
        <Fragment>
          <Overlay closeModal={hideSelectedHandler} />
          <div onChange={changeLanguage} className="LangContent">
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
        </Fragment>
      )}
    </Fragment>
  );
};
export default LangSelector;
