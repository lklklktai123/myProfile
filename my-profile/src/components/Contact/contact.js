import HeadingTitle from '../HeadingTitle/headingTitle';
import Address from './Address/Address';

const contact = () => {
  return (
    <section className="contact vertical-normal">
      <HeadingTitle title="Contact" />
      <h4 className="heading-4">
        Please contact me if you any question or more informations
      </h4>
      <div className="contact__container">
        <Address />
        <div className="contact__container-form">Form</div>
      </div>
    </section>
  );
};
export default contact;
