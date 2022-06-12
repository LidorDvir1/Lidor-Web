import styles from './Nav.module.css';
import { navButtons } from '../../utills/data';
import React, { useState } from 'react';

const styleObj = {
  isOnTopBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  isNotOnTopBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

const Content = React.memo(() => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;
    const windowWidth = window.innerWidth;
    const navHeight = windowWidth < 480 ? 80 : 120;

    window.scrollTo({
      left: 0,
      top: location - navHeight,
    });
  };

  return (
    <>
      <h1>Lidor Dvir</h1>
      <div>
        {navButtons.map((navButton) => (
          <a href={`#${navButton}`} onClick={handleClick} key={navButton}>
            {navButton}
          </a>
        ))}
      </div>
    </>
  );
});

const Nav = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0 && !isOnTop) {
      setIsOnTop(true);
    } else if (window.scrollY !== 0 && isOnTop) {
      setIsOnTop(false);
    }
  });

  return (
    <nav
      className={styles.container}
      style={
        isOnTop ? styleObj.isOnTopBackground : styleObj.isNotOnTopBackground
      }
    >
      <Content />
    </nav>
  );
};

export default Nav;
