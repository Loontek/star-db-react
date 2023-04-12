import styles from "./RestoreButton.module.scss";

const RestoreButton = ({ handleRestore, item }) => {
	return (
		<button
			className={styles.RestoreButton}
			onClick={() => handleRestore()}
		>
			Restore {item}
		</button>
	);
};

export default RestoreButton;
