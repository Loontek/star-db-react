import { Outlet } from "react-router-dom";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./StarDbApp.module.scss";

const StarDbApp = () => {
	return (
		<div className={styles.StarDbApp}>
			<div id={styles.space}>
				<div className={styles.stars}></div>
				<div className={styles.stars}></div>
				<div className={styles.stars}></div>
				<div className={styles.stars}></div>
			</div>
			<Header />
			<AnimatedPage>
				<Outlet />
			</AnimatedPage>
			<Footer />
		</div>
	);
};

export default StarDbApp;
