import Navigation from "../Navigation/Navigation";
import Logo from "../UI/Logo/Logo";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.Header}>
			<Logo />
			<Navigation />
		</header>
	);
};

export default Header;
