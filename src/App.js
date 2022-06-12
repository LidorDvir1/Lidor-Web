import { Suspense, lazy } from 'react';
import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Nav from './components/Nav/Nav';
const Contact = lazy(() => import('./components/Contact/Contact'));
const Projects = lazy(() => import('./components/Projects/Projects'));

const App = () => {
  return (
    <main className={styles.container}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Suspense fallback={<></>}>
        <Projects />
        <Contact />
      </Suspense>
    </main>
  );
};

export default App;
