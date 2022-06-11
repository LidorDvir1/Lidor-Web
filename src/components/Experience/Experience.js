import styles from './Experience.module.css';
import { experienceArr } from '../../utills/data';

const SingleExperience = ({
  name,
  companyName,
  description,
  points,
  logo,
  date,
}) => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.content}>
        <div>
          <img src={logo} alt="logo" />
          <h1>
            {name} | <span>{companyName}</span>
          </h1>
        </div>
        <h3>{date}</h3>
        <h4 className={styles.description}>{description}</h4>
        {points.map((point) => (
          <p>• {point}</p>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" style={{ display: 'flex' }}>
      <h1>Experience</h1>
      {experienceArr.map((experience) => (
        <SingleExperience {...experience} />
      ))}
    </section>
  );
};

export default Experience;
