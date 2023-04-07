import AnimatedPage from "../components/AnimatedPage/AnimatedPage";

const HomePage = ({ styles }) => {
	return (
		<AnimatedPage>
			<div className={styles.greeting}>
				<h2 className={styles.title}>Hello there!</h2>
				<img
					className={styles.img}
					src="https://media.tenor.com/-66ZzsYrweIAAAAC/star-wars-obi-wan-kenobi.gif"
				></img>
			</div>
		</AnimatedPage>
	);
};

export default HomePage;
