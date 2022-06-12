import styles from './Projects.module.css';
import { projects } from '../../utills/data';

const SingleProject = ({
  name,
  description,
  logo,
  skills,
  images,
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
      <div className={styles.images}>
        {images.map((image) => (
          <img src={image} alt="projectImage" key={image} />
        ))}
      </div>
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
