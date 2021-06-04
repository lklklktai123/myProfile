import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  return (
    <form className="contact__container-form">
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
        value={email}
        type="email"
        placeholder="Email"
        className="input-mail"
        required
        name="email"
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
      />
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
