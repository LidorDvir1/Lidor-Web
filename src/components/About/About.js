import styles from './About.module.css';
import { Avatar } from '@mui/material';
import ProfileImage from '../../assets/profileImage.jpeg';

const About = () => {
  return (
    <section className={styles.container} id="About">
      <Avatar
        alt="Remy Sharp"
        src={ProfileImage}
        sx={{ height: 250, width: 250 }}
      />
      <div>
        <h1>About Me</h1>
        <p>
          Software Developer who loves dealing with software design,
          architecture, complex problem solving and abstract thinking.
          Specialize in latest technologies such as JavaScript, React, React
          Native, Redux, Node.js and MongoDB.
        </p>
      </div>
    </section>
  );
};

export default About;
