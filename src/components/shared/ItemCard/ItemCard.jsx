import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ErrorIndicator from "../../UI/ErrorIndicator/ErrorIndicator";
import Loader from "../../UI/Loader/Loader";
import ErrorButton from "../../UI/ErrorButton/ErrorButton";
import styles from "./ItemCard.module.scss";

const ItemCard = ({
	item,
	image,
	selectedItem,
	isLoading,
	isError,
	errorIcon,
	description,
	choose,
	handleErrowThrow,
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
		<article className={styles.ItemCard}>
			<AnimatePresence mode="wait">
				{!selectedItem && (
					<ErrorIndicator
						description={`Choose ${choose}`}
						key="choose"
					/>
				)}
				{isError && (
					<ErrorIndicator
						icon={errorIcon}
						description={description}
						key="error"
					/>
				)}
				{isLoading && !isError && selectedItem && (
					<Loader key="loader" />
				)}
				{!isLoading && !isError && (
					<motion.div
						className={styles.wrapper}
						key="content"
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
							<ErrorButton
								handleErrowThrow={handleErrowThrow}
								item={choose}
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	);
};

export default ItemCard;
