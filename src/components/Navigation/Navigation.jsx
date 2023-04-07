import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	const links = ["characters", "planets", "starships"];

	return (
		<nav className={styles.Navigation}>
			<ul className={styles.list}>
				{links.map((link, i) => (
					<li key={i} className={styles.item}>
						<NavLink
							className={({ isActive }) =>
								isActive
									? [styles.link, styles.active].join(" ")
									: styles.link
							}
							to={`/star-db-react/${link}`}
						>
							{link[0].toUpperCase() + link.slice(1)}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
