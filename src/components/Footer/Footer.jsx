import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<a href="https://github.com/Loontek" className={styles.link}>
				Developer: Mark Soikin
			</a>
			<a href="https://swapi.dev/" className={styles.link}>
				API: SWAPI
			</a>
		</footer>
	);
};

export default Footer;
