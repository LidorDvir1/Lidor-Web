import styles from './About.module.css';
import { Avatar } from '@mui/material';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <Avatar
          alt="Remy Sharp"
          src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
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
      </div>
    </section>
  );
};

export default About;
