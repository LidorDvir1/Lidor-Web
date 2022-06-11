import styles from './Projects.module.css';
import { projects } from '../../utills/data';
import ReactPlayer from 'react-player';

const SingleProject = ({
  name,
  description,
  logo,
  skills,
  video,
  background,
}) => {
  return (
    <section
      className={[styles.container]}
      style={{ background }}
      id="projects"
    >
      <div className={styles.header}>
        <img src={logo} alt="logo" />
        <h1>{name}</h1>
      </div>
      <p>{description}</p>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <img src={skill} alt="skill" />
        ))}
      </div>
      <ReactPlayer
        url="https://res.cloudinary.com/lineapp/video/upload/v1654522630/zciyesojvjxqb2x8crhc.mp4"
        controls
        width="352px"
        height="652px"
        volume={1}
      />
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      {projects.map((project) => (
        <SingleProject {...project} />
      ))}
    </section>
  );
};

export default Projects;
