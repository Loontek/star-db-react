import styles from "./Feature.module.scss";

const Feature = ({ item, field, label }) => {
	return (
		<li className={styles.feature}>
			<span className={styles.itemName}>{label}</span>
			<span className={styles.itemValue}>{item[field]}</span>
		</li>
	);
};

export default Feature;
