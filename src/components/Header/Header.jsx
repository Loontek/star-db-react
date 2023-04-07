import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";

const Header = ({ handleErrowThrow, handleRestore }) => {
	return (
		<header className={styles.Header}>
			<Logo />
			<Navigation />
			<div className={styles.buttons}>
				<button
					className={styles.ErrorButton}
					onClick={() => handleErrowThrow()}
				>
					Destroy planet
				</button>
				<button
					className={styles.RestoreButton}
					onClick={() => handleRestore()}
				>
					Restore planet
				</button>
			</div>
		</header>
	);
};

export default Header;
