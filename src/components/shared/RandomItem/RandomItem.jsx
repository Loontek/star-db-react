import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../../UI/Loader/Loader";
import ErrorIndicator from "../../UI/ErrorIndicator/ErrorIndicator";
import styles from "./RandomItem.module.scss";

const RandomItem = ({
	item,
	image,
	isLoading,
	isError,
	errorIcon,
	description,
	children,
}) => {
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
		<div className={styles.RandomItem}>
			<AnimatePresence mode="wait">
				{isError && (
					<ErrorIndicator
						icon={errorIcon}
						description={description}
						key="error"
					/>
				)}
				{!isError && isLoading && (
					<Loader isLoading={isLoading} key="loader" />
				)}
				{!isError && !isLoading && (
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
							src={image}
							alt={item.name}
						/>
						<div className={styles.content}>
							<h2 className={styles.title}>{item.name}</h2>
							<ul className={styles.featuresList}>
								{React.Children.map(children, (child) =>
									React.cloneElement(child, { item })
								)}
							</ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
		// <>
		// 	{!isError && (
		// 		<motion.div
		// 			className={styles.RandomItem}
		// 			variants={animations}
		// 			initial="initial"
		// 			animate="animate"
		// 			exit="exit"
		// 			transition={{
		// 				type: "spring",
		// 				duration: 0.5,
		// 			}}
		// 		>
		// 			<img className={styles.img} src={image} alt={item.name} />
		// 			<div className={styles.content}>
		// 				<h2 className={styles.title}>{item.name}</h2>
		// 				<ul className={styles.featuresList}>
		// 					{React.Children.map(children, (child) =>
		// 						React.cloneElement(child, { item })
		// 					)}
		// 				</ul>
		// 			</div>
		// 		</motion.div>
		// 	)}
		// </>
	);
};

export default RandomItem;
