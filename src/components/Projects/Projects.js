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
    <div className={[styles.container]} style={{ background }}>
      <div className={styles.header}>
        <img src={logo} alt="logo" />
        <h1>{name}</h1>
      </div>
      <p>{description}</p>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <img src={skill} alt="skill" key={skill} />
        ))}
      </div>
      <ReactPlayer
        url="https://res.cloudinary.com/lineapp/video/upload/v1654522630/zciyesojvjxqb2x8crhc.mp4"
        controls
        width="352px"
        height="652px"
        volume={1}
      />
    </div>
  );
};

const Projects = () => {
  return (
    <section id="Projects">
      {projects.map((project) => (
        <SingleProject {...project} key={project.name} />
      ))}
    </section>
  );
};

export default Projects;
