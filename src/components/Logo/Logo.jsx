import styles from "./Logo.module.scss";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link className={styles.Logo} to="/star-db-react/">
			<img className={styles.img} src={logo} alt="Logo" />
			<div className={styles.content}>
				<h1 className={styles.title}>StarDB</h1>
				<span className={styles.subTitle}>All about star wars</span>
			</div>
		</Link>
	);
};

export default Logo;
