import { motion } from "framer-motion";
import styles from "./Loader.module.scss";

const Loader = () => {
	const animations = {
		initial: {
			opacity: 0,
			rotate: 0,
		},
		animate: {
			opacity: 1,
			rotate: [0, "360deg"],
		},
		exit: {
			opacity: 0,
			rotate: 0,
		},
	};

	return (
		<motion.div
			className={styles.Loader}
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{
				type: "spring",
				duration: 0.5,
			}}
		/>
	);
};

export default Loader;
