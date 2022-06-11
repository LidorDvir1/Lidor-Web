import styles from "./Skills.module.css";
import html from "../../assets/Skills/html.png";
import css from "../../assets/Skills/css.png";
import js from "../../assets/Skills/js.png";
import react from "../../assets/Skills/react.png";
import reactNative from "../../assets/Skills/reactnative.png";
import mongoDB from "../../assets/Skills/mongodb.png";
import node from "../../assets/Skills/node.png";
import socket from "../../assets/Skills/socketio.png";

const Skills = () => {
	return (
		<div className={styles.container}>
			<img src={html} alt='html' className={styles.logo} />
			<img src={css} alt='css' className={styles.logo} />
			<img src={js} alt='js' className={styles.logo} />
			<img src={react} alt='react' className={styles.logo} />
			<img src={reactNative} alt='reactNative' className={styles.logo} />
			<img src={node} alt='node' className={styles.logo} />
			<img src={mongoDB} alt='mongo' className={styles.logo} />
			<img src={socket} alt='socket' className={styles.logo} />
		</div>
	);
};

export default Skills;
