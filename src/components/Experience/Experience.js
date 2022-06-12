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
    <div id="Experience">
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
          <p key={point}>• {point}</p>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="Experience" className={styles.container}>
      {experienceArr.map((experience) => (
        <SingleExperience {...experience} key={experience.date} />
      ))}
    </section>
  );
};

export default Experience;
