import styles from './Skills.module.css';
import { skills } from '../../utills/data';

const Skills = () => {
  return (
    <div className={styles.container}>
      {skills.map((skill) => (
        <img src={skill} alt="skill" key={skill} />
      ))}
    </div>
  );
};

export default Skills;
