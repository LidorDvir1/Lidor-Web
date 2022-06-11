import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { AiOutlinePhone } from '@react-icons/all-files/ai/AiOutlinePhone';
import styles from './Contact.module.css';

const SingleContact = ({ info, icon }) => {
  return (
    <div className={styles['single-contact']}>
      <>{icon}</>
      <h3>{info}</h3>
    </div>
  );
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <SingleContact
        info="lidor@gmail.com"
        icon={<AiOutlineMail className={styles.icon} />}
      />
      <SingleContact
        info="https://www.linkedin.com/in/lidor-dvir/"
        icon={<AiFillLinkedin className={styles.icon} />}
      />
      <SingleContact
        info="054-5861867"
        icon={<AiOutlinePhone className={styles.icon} />}
      />
    </div>
  );
};

export default Contact;
