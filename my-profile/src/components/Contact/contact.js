import HeadingTitle from '../HeadingTitle/headingTitle';
import Address from '../../components/Contact/Address/address';
import Form from './Form/form';
const Contact = () => {
  return (
    <section className="contact vertical-normal">
      <HeadingTitle title="Contact" />
      <h4 className="heading-4">
        Please contact me if you any question or more informations
      </h4>
      <div className="contact__container">
        <Address />
        <Form />
      </div>
    </section>
  );
};
export default Contact;
