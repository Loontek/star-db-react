import styles from "./HomePage.module.scss";

const HomePage = () => {
	return (
		<>
			<div className={styles.greeting}>
				<h2 className={styles.title}>Hello there!</h2>
				<img
					className={styles.img}
					src="https://i.ytimg.com/vi/4JkMh_hqRVQ/maxresdefault.jpg"
					alt="Obi Wan Kenobi"
				/>
			</div>
		</>
	);
};

export default HomePage;
