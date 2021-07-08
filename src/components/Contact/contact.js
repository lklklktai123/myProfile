import HeadingTitle from '../HeadingTitle/headingTitle';
import Address from '../../components/Contact/Address/address';
import Form from './Form/form';
import { useTranslation } from 'react-i18next';
const Contact = () => {
  const { t } = useTranslation();
  return (
    <section
      className="contact vertical-normal blur"
      id="contact"
      data-id-menu="menu-contact"
    >
      <HeadingTitle title={t('Contact')} />
      <h4 className="heading-4">
        {t('Please_contact_me_if_you_any_question_or_more_informations')}
      </h4>
      <div className="contact__container">
        <Address
          title={t('Contact_Address')}
          address={t(
            '119/49A_Nguyen_Hong_Dao_Street_Ward_14_Tan_Binh_District_Ho_Chi_Minh_City'
          )}
          email="Email:thanhtailk96@gmail.com"
          phone={`${t('Phone')}: 0965143263`}
        />
        <Form />
      </div>
    </section>
  );
};
export default Contact;
