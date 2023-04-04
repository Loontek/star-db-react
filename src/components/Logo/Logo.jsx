import styles from './Logo.module.scss';
import logo from '../../assets/img/logo.svg';

const Logo = () => {
    return (
    <a className={styles.Logo} href="#">
      <img className={styles.img} src={logo} alt="Logo"/>
      <div className={styles.content}>
        <h1 className={styles.title}>
          StarDB
        </h1>
        <span className={styles.subTitle}>
          All about star wars
        </span>
      </div>
    </a>
  )
}

export default Logo;