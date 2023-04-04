import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';

const Header = () => {
    return (
    <header className={styles.Header}>
      <Logo/>
      <Navigation/>
    </header>
  )
}

export default Header;