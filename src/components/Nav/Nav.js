import styles from './Nav.module.css';

const Nav = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 127,
    });
  };

  return (
    <nav className={styles.container}>
      <h1>Lidor Dvir</h1>
      <div>
        <a href="#home" onClick={handleClick}>
          Home
        </a>
        <a href="#about" onClick={handleClick}>
          About
        </a>
        <a href="#experience" onClick={handleClick}>
          Experience
        </a>
        <a href="#projects" onClick={handleClick}>
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Nav;
