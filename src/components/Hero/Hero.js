import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container} id="Home">
      <div className={styles.content}>
        <h1>Lidor Dvir</h1>
        <h1>Software Developer</h1>
        <h1>Welcome To My Portfolio</h1>
      </div>
    </section>
  );
};

export default Hero;
