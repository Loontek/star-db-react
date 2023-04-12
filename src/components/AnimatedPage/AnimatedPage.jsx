import styles from "./AnimatedPage.module.scss";
import { motion } from "framer-motion";

const AnimatedPage = ({ children }) => {
	const animations = {
		initial: {
			opacity: 0,
			scale: 0,
		},
		animate: {
			opacity: 1,
			scale: 1,
		},
		exit: {
			opacity: 0,
			scale: 0,
		},
	};

	return (
		<motion.main
			className={styles.AnimatedPage}
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{
				type: "spring",
				duration: 0.5,
			}}
		>
			{children}
		</motion.main>
	);
};

export default AnimatedPage;
