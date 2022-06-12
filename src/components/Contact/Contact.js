import styles from './Contact.module.css';
import { contactOptions } from '../../utills/data';

const SingleContact = ({ info, icon }) => {
  return (
    <div>
      <>{icon}</>
      <h3>{info}</h3>
    </div>
  );
};

const Contact = () => {
  return (
    <div className={styles.container}>
      {contactOptions.map((contactOption) => (
        <SingleContact {...contactOption} key={contactOption.info} />
      ))}
    </div>
  );
};

export default Contact;
