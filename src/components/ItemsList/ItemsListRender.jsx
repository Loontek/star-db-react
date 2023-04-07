import { motion } from "framer-motion";
import styles from "./ItemsList.module.scss";

const ItemsListRender = ({ list, handleSelect, children }) => {
	const animations = {
		initial: {
			opacity: 0,
			translateY: "-100%",
			height: 0,
		},
		animate: {
			height: "100%",
			translateY: 0,
			opacity: 1,
		},
		exit: {
			height: 0,
			opacity: 0,
			translateY: "100%",
		},
	};

	return (
		<motion.ul
			className={styles.content}
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{
				type: "spring",
				duration: 0.5,
			}}
		>
			{list.map((item) => {
				const { id } = item;
				const label = children(item);
				return (
					<li
						key={id}
						className={styles.item}
						onClick={(e) => {
							handleSelect(id);
							for (let item of e.target.parentNode.children) {
								item.classList.remove(styles.itemActive);
							}
							e.target.classList.add(styles.itemActive);
						}}
					>
						{label}
					</li>
				);
			})}
		</motion.ul>
	);
};

export default ItemsListRender;
