import React, { useState, useContext, Fragment } from 'react';
import emailjs from 'emailjs-com';
import config from '../../../Config/config';
import ReCAPTCHA from 'react-google-recaptcha';
import { ErrorContext } from '../../../Context/error-context';
import { useTranslation } from 'react-i18next';
import Modal from '../../Overlay/Modal/modal';
import Overlay from '../../Overlay/overlay';
const Form = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const errCtx = useContext(ErrorContext);
  const [isShow, setIsShow] = useState(false);

  const onchange = value => {
    console.log('Captcha value:', value);
  };
  const sendEmail = e => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(config.SERVICE_ID, config.TEMPLATE_ID, e.target, config.USER_ID)
      .then(
        result => {
          errCtx.onError(false);
          setIsShow(true);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setIsLoading(false);
        },
        error => {
          errCtx.onError(true);
          setIsShow(true);
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };
  const closeModalHandler = () => {
    setIsShow(false);
  };
  return (
    <>
      {isShow && (
        <Fragment>
          <Overlay closeModal={closeModalHandler}></Overlay>
          <Modal closeModal={closeModalHandler} />
        </Fragment>
      )}
      <form className="contact__container-form" onSubmit={sendEmail}>
        <input
          value={name}
          type="text"
          placeholder={t('Name')}
          className="input-name normal-text"
          name="name"
          required
          onChange={e => setName(e.target.value)}
        />
        <input
          type="hidden"
          value="thanhtailk96@gmail.com"
          name="to_name"
        ></input>
        <input
          value={email}
          type="email"
          placeholder="Email"
          className="input-mail"
          required
          name="from_name"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          value={subject}
          type="text"
          placeholder={t('Subject')}
          className="input-subject normal-text"
          name="subject"
          required
          onChange={e => setSubject(e.target.value)}
        />

        <textarea
          placeholder={t('Message')}
          required
          value={message}
          type="text"
          className="input-message normal-text"
          onChange={e => setMessage(e.target.value)}
          rows="7"
          name="message"
        />
        <ReCAPTCHA
          sitekey={config.SITE_KEY}
          onChange={onchange}
          size="normal"
        />
        {isLoading && <p>Loading ...</p>}
        <button type="submit" className="btn-submit">
          {t('Submit')}
        </button>
      </form>
    </>
  );
};
export default Form;
