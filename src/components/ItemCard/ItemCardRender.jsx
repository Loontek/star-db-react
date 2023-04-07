import styles from "./ItemCard.module.scss";
import { ErrorButton } from "../Header/Header.module.scss";
import React from "react";
import { motion } from "framer-motion";

const ItemCardRender = ({ item, image, children, setIsErrorThrown }) => {
	const animations = {
		initial: {
			opacity: 0,
			translateX: "-100%",
		},
		animate: {
			opacity: 1,
			translateX: 0,
		},
		exit: {
			opacity: 0,
			translateX: "100%",
		},
	};

	return (
		<motion.div
			className={styles.ItemCardRender}
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{
				type: "spring",
				duration: 0.5,
			}}
		>
			<img className={styles.img} src={image} alt={item.name} />
			<div className={styles.content}>
				<h2 className={styles.title}>{item.name}</h2>
				<ul className={styles.featuresList}>
					{React.Children.map(children, (child) =>
						React.cloneElement(child, { item })
					)}
				</ul>
				<button
					className={ErrorButton}
					onClick={() => {
						setIsErrorThrown(true);
					}}
				>
					Throw error
				</button>
			</div>
		</motion.div>
	);
};

export default ItemCardRender;
