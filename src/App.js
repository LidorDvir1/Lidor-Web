import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <main className={styles.container}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
