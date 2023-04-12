import styles from "./ErrorButton.module.scss";

const ErrorButton = ({ handleErrowThrow, item }) => {
	return (
		<button
			className={styles.ErrorButton}
			onClick={() => handleErrowThrow()}
		>
			Destroy {item}
		</button>
	);
};

export default ErrorButton;
