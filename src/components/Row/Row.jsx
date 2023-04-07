import styles from "./Row.module.scss";

const Row = ({ left, right }) => {
	return (
		<div className={styles.row}>
			<div className={styles.col}>{left}</div>
			<div className={styles.col}>{right}</div>
		</div>
	);
};

export default Row;
