import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import config from '../../../Config/config';
import ReCAPTCHA from 'react-google-recaptcha';
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const onchange = value => {
    console.log('Captcha value:', value);
  };
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(config.SERVICE_ID, config.TEMPLATE_ID, e.target, config.USER_ID)
      .then(
        result => {
          alert('Email Sent Successfully!');
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        error => {
          console.log(error.text);
          alert('Something went wrong!');
        }
      );
  };
  return (
    <form className="contact__container-form" onSubmit={sendEmail}>
      <input
        value={name}
        type="text"
        placeholder="Name"
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
        placeholder="Subject"
        className="input-subject normal-text"
        name="subject"
        required
        onChange={e => setSubject(e.target.value)}
      />

      <textarea
        placeholder="Message"
        required
        value={message}
        type="text"
        className="input-message normal-text"
        onChange={e => setMessage(e.target.value)}
        rows="7"
        name="message"
      />
      <ReCAPTCHA sitekey={config.SITE_KEY} onChange={onchange} />
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
