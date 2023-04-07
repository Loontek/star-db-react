import { motion } from "framer-motion";
import styles from "./ErrorIndicator.module.scss";

const ErrorIndicator = ({ icon, description }) => {
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
		<motion.div
			className={styles.ErrorIndicator}
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{
				type: "spring",
				duration: 0.5,
			}}
		>
			{icon ? (
				<img className={styles.img} src={icon} alt="Error Icon" />
			) : null}
			{description ? (
				<span className={styles.description}>{description}</span>
			) : null}
		</motion.div>
	);
};

export default ErrorIndicator;
