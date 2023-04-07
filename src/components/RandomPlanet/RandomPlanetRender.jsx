import { motion } from "framer-motion";
import React from "react";
import styles from "./RandomPlanet.module.scss";

const RandomPlanetRender = ({ planet }) => {
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
			className={styles.wrapper}
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{
				type: "spring",
				duration: 0.5,
			}}
		>
			<img
				className={styles.img}
				src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
				alt={planet.name}
			/>
			<div className={styles.content}>
				<h2 className={styles.title}>{planet.name}</h2>
				<ul className={styles.featuresList}>
					<li className={styles.item}>
						<span className={styles.itemName}>Population</span>
						<span className={styles.itemValue}>
							{planet.population}
						</span>
					</li>
					<li className={styles.item}>
						<span className={styles.itemName}>Rotation period</span>
						<span className={styles.itemValue}>
							{planet.rotationPeriod}
						</span>
					</li>
					<li className={styles.item}>
						<span className={styles.itemName}>Diameter</span>
						<span className={styles.itemValue}>
							{planet.diameter}
						</span>
					</li>
				</ul>
			</div>
		</motion.div>
	);
};

export default RandomPlanetRender;
